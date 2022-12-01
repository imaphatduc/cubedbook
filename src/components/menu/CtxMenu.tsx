import { ControlledMenu, MenuState, useMenuState } from '@szhsin/react-menu';
import { CtxMenuItem } from './CtxMenuItem';
import { CtxSubMenu } from './CtxSubMenu';

export const menuClassName = ({ state }: { state: MenuState }) =>
  `box-border z-50 text-sm bg-[#444] rounded-sm shadow-xl select-none focus:outline-none min-w-[12rem] ${
    state === 'open' && 'animate-fadeIn'
  } ${state === 'closed' && 'animate-fadeOut'}`;

interface Props {
  menuProps: {
    state?: MenuState;
    endTransition: () => void;
  };
  toggleMenu: (open?: boolean) => void;
  anchorPoint: {
    x: number;
    y: number;
  };
}

export const CtxMenu = ({ menuProps, toggleMenu, anchorPoint }: Props) => {
  return (
    <ControlledMenu
      {...menuProps}
      menuClassName={menuClassName}
      anchorPoint={anchorPoint}
      onClose={() => toggleMenu(false)}
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
    </ControlledMenu>
  );
};
