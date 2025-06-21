import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { tree } from "./hooks/tree.ts";

declare module "react-dom/client" {
  interface Root {
    _internalRoot: {
      identifierPrefix: string;
    };
  }
}

const root = createRoot(document.getElementById("root")!, {
  identifierPrefix: "my-app",
});

tree.identifierPrefix = root._internalRoot.identifierPrefix;

root.render(<App />);
