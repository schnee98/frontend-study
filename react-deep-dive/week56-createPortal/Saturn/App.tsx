import { myCreatePortal } from "./myCreatePortal";

function App() {
  return (
    <div>
      <p>This child is placed in the parent div.</p>
      {myCreatePortal(
        <p>This child is placed in the document body.</p>,
        document.body
      )}
    </div>
  );
}

export default App;
