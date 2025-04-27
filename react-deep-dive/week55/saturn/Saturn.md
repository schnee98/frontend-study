## [useId](https://ko.react.dev/reference/react/useId#usage)

```ts
import React from "react";

let id = 0;

function getId() {
  return `:${"r"}${id++}:`;
}

function PasswordField() {
  const passwordHintId = getId();

  return (
    <>
      <label>
        Password:
        <input type="password" aria-describedby={passwordHintId} />
      </label>
      <p id={passwordHintId}>
        The password should contain at least 18 characters
      </p>
    </>
  );
}

export function App() {
  return (
    <>
      <h2>Choose password</h2>
      <PasswordField />
      <h2>Confirm password</h2>
      <PasswordField />
    </>
  );
}
```
