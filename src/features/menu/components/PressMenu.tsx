import { type PropsWithChildren } from "react";
import { Menu, type MenuProps } from "@szhsin/react-menu";

import { menuClassName } from "./CtxMenu";

export const PressMenu = ({
  children,
  ...props
}: PropsWithChildren<MenuProps>) => {
  return (
    <Menu {...props} menuClassName={menuClassName}>
      {children}
    </Menu>
  );
};
