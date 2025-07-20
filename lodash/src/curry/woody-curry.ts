const PLACEHOLDER = Symbol("placeholder");

function mergeArgs(prevArgs: any[], nextArgs: any[]): any[] {
  const originalArgs = [...prevArgs];
  let nextIndex = 0;

  // 기존 인자들에서 PLACEHOLDER 찾아서 새 인자로 교체
  for (let i = 0; i < originalArgs.length && nextIndex < nextArgs.length; i++) {
    if (originalArgs[i] === PLACEHOLDER) {
      originalArgs[i] = nextArgs[nextIndex];
      nextIndex++;
    }
  }

  // 남은 새 인자들을 뒤에 추가
  while (nextIndex < nextArgs.length) {
    originalArgs.push(nextArgs[nextIndex]);
    nextIndex++;
  }

  return originalArgs;
}

function curry(fn: Function): Function {
  const argsLength = fn.length;

  function collectArgs(...args: any[]): any {
    // 현재까지 모은 인자들 (빈자리 포함)
    const collectedArgs = args.length === 0 ? [] : [...args];

    // 빈자리 제외한 인자들
    const removedPlaceholderArgs = collectedArgs.filter(
      (arg) => arg !== PLACEHOLDER
    );

    // 조건 체크: 충분한 인자 + 빈자리 없음 = 실행
    if (
      removedPlaceholderArgs.length >= argsLength &&
      !collectedArgs.includes(PLACEHOLDER)
    ) {
      return fn(...collectedArgs.slice(0, argsLength));
    }

    // 아직 부족함: 더 기다리는 함수 반환 (재귀)
    return function wait(...nextArgs: any[]) {
      const mergedArgs = mergeArgs(collectedArgs, nextArgs);

      return collectArgs(...mergedArgs);
    };
  }

  return collectArgs;
}

export default curry;
