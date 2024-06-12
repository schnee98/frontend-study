## 1. 사용자 정의 훅과 고차 컴포넌트의 네이밍 규칙을 설명하세요.

## 2. 아래 코드가 실행되도록 throttle을 고차함수로 만들어보세요.
```
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