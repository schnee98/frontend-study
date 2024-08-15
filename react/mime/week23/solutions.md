## 정답

1.  Ref를 만든 다음 받는 컴포넌트에서는 forwardRef를 감싼 후 ref props를 받을 수 있다.

- 참고: 리액트 19 버전부터는 forwardRef가 필요가 없다

2. 커밋 단계
3. 동기적으로 실행시킴.

```
flushSync(() => {
  setTodos([...todos, newTodo]);
});
listRef.current.lastChild.scrollIntoView();
```

- 이 경우, flushSync가 실행되면 React는 setTodos로 인해 발생하는 상태 업데이트를 즉시 처리합니다. 즉, flushSync 내부에서 렌더링과 커밋이 동기적으로 이루어집니다. 그 결과, flushSync 블록이 끝나는 즉시 UI가 업데이트되고, 그 이후에 listRef.current.lastChild.scrollIntoView()가 실행됩니다. 이때는 이미 새로운 newTodo가 DOM에 추가된 상태이므로 스크롤이 올바르게 동작하게 됩니다
