import { createPortal } from "react-dom"
import { customCreatePortal } from "./hook/customCreatePortal"

function App() {
    
  return (
    <>
      <div>
        <p>This child is placed in the parent div.</p>
        {/* {
        createPortal(
          <p>This child is placed in the document body.</p>, document.body
        )} */}
        {customCreatePortal(
          <p>This child is placed in the document body. with customCreatePortal</p>, document.body
        )}
      </div>
    </>
  )
}

export default App
