import { type PropsWithChildren } from "react";
import { Menu, type MenuProps } from "@szhsin/react-menu";
import { getMenuClassName } from "../lib";

export const PressMenu = ({
  children,
  ...props
}: PropsWithChildren<MenuProps>) => {
  return (
    <Menu {...props} menuClassName={getMenuClassName}>
      {children}
    </Menu>
  );
};
