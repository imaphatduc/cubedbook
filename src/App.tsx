import { MouseEvent, useState } from 'react';
import { useMenuState } from '@szhsin/react-menu';

import { PadSection } from './components/sections/PadSection';
import { SceneSection } from './components/sections/SceneSection';
import { CtxMenu } from './components/menu/CtxMenu';
import { CtxSubMenu } from './components/menu/CtxSubMenu';
import { CtxMenuItem } from './components/menu/CtxMenuItem';

function App() {
  const [menuProps, toggleMenu] = useMenuState();
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });

  const openContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    setAnchorPoint({ x: e.clientX, y: e.clientY });
    toggleMenu(true);
  };

  return (
    <div className="App">
      <div
        className="grid grid-cols-[1fr_2fr_1fr] bg-[#222] text-white"
        onContextMenu={openContextMenu}
      >
        <div className="prose my-2 px-5">
          <SceneSection />
        </div>
        <div
          id="cubecubed"
          className="sticky top-0 right-0 bottom-0 left-0 bg-black h-screen"
        ></div>
        <div className="prose my-2 px-5">
          <PadSection />
        </div>

        <CtxMenu
          menuProps={menuProps}
          toggleMenu={toggleMenu}
          anchorPoint={anchorPoint}
        >
          <CtxSubMenu label="Geometry">
            <CtxMenuItem label="Rectangle" />
            <CtxMenuItem label="Square" />
            <CtxMenuItem label="Circle" />
            <CtxMenuItem label="Line" />
            <CtxMenuItem label="Vector Shape" />
            <CtxMenuItem label="Parametric Curve" />
          </CtxSubMenu>
          <CtxSubMenu label="Coordinates System">
            <CtxMenuItem label="Axes" />
          </CtxSubMenu>
          <CtxSubMenu label="Animations">
            <CtxMenuItem label="Create Shape" />
            <CtxMenuItem label="Create Vector Shape" />
            <CtxMenuItem label="Translate" />
            <CtxMenuItem label="Rotate" />
            <CtxMenuItem label="Fade In" />
            <CtxMenuItem label="Fade Out" />
            <CtxMenuItem label="Draw Grid" />
            <CtxMenuItem label="Draw Axes" />
            <CtxMenuItem label="Draw Vector Field" />
            <CtxMenuItem label="Point To Coordinates" />
            <CtxMenuItem label="Point Along Graph" />
            <CtxMenuItem label="Write" />
            <CtxMenuItem label="Trace" />
            <CtxMenuItem label="Apply Function" />
          </CtxSubMenu>
        </CtxMenu>
      </div>
    </div>
  );
}

export default App;
