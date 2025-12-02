import { ControlledMenu, type MenuState } from "@szhsin/react-menu";
import { type PropsWithChildren } from "react";
import { getMenuClassName } from "../lib";

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

export const CtxMenu = ({
  children,
  menuProps,
  toggleMenu,
  anchorPoint,
}: PropsWithChildren<Props>) => {
  return (
    <ControlledMenu
      {...menuProps}
      menuClassName={getMenuClassName}
      anchorPoint={anchorPoint}
      onClose={() => toggleMenu(false)}
    >
      {children}
    </ControlledMenu>
  );
};
