import { useId } from 'react';
import useCustomId from '@/hooks/useId';

function PasswordField() {
  const reactId = useId();
  const customId = useCustomId();
  return (
    <>
      <label>
        Password:
        <input
          type="password"
          aria-describedby={reactId}
        />
      </label>
      <p id={reactId}>
        The password should contain at least 18 characters
      </p>
      <p>{reactId}</p>
      <p>{customId}</p>
    </>
  );
}

export default function App() {
  return (
    <>
      <h2>Choose password</h2>
      <PasswordField />
      <h2>Confirm password</h2>
      <PasswordField />
    </>
  );
}
