import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CubedProvider } from "./contexts";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DndProvider backend={HTML5Backend}>
      <CubedProvider>
        <App />
      </CubedProvider>
    </DndProvider>
  </StrictMode>
);
