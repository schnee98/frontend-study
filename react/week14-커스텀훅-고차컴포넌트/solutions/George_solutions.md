## 1. 사용자 정의 훅과 고차 컴포넌트의 네이밍 규칙을 설명하세요.
- 사용자 정의 훅: use로 시작
- 고차 컴포넌트 with로 시작

## 2. 아래 코드가 실행되도록 throttle을 고차함수로 만들어보세요.
```
const handleMouseMove = () => {
    console.log("실행");
};

const throttleMouseMove = throttle(handleMouseMove, 1000);

document.addEventListener('mousemove', throttleMouseMove);
```

 - 정답
```
const throttle = (callback, delay) => {
    let timerId;
    return (...args) => {
        if (timerId) return;
        timerId = setTimeout(() => {
            callback(...args);
            timerId = null;
        }, delay);
    };
};

const handleMouseMove = () => {
    console.log("실행");
};

const throttleMouseMove = throttle(handleMouseMove, 1000);

document.addEventListener('mousemove', throttleMouseMove);
```

## 2. 아래 코드가 실행되도록 debounce를 고차함수로 만들어보세요.
```
const handleMouseMove = () => {
    console.log("실행");
};

const debouncedMouseMove = debounce(handleMouseMove, 1000);

document.addEventListener('mousemove', debouncedMouseMove);
```

 - 정답
```
const debounce = (callback, delay) => {
    let timerId;
    return (...args) => {
        if (timerId) clearTimeout(timerId);
        timerId = setTimeout(() => {
            callback(...args);
        }, delay);
    };
};

const handleMouseMove = () => {
    console.log("실행");
};

const debouncedMouseMove = debounce(handleMouseMove, 1000);

document.addEventListener('mousemove', debouncedMouseMove);
```