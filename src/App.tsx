import { Left, Right } from "@/features/main-screen";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

function App() {
  return (
    <div className="App h-screen">
      <PanelGroup direction="horizontal" className="bg-[#222] text-white">
        <Panel>
          <Left />
        </Panel>
        <PanelResizeHandle />
        <Panel defaultSize={22}>
          <Right />
        </Panel>
      </PanelGroup>
    </div>
  );
}

export default App;
