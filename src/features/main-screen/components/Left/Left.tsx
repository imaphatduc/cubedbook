import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { BottomLeft } from "./BottomLeft";
import { TopLeft } from "./TopLeft";

export const Left = () => {
  return (
    <PanelGroup direction="vertical" className="overflow-hidden">
      <Panel>
        <TopLeft />
      </Panel>
      <PanelResizeHandle />
      <Panel defaultSize={25}>
        <BottomLeft />
      </Panel>
    </PanelGroup>
  );
};
