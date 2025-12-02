import { SubMenu, type SubMenuProps } from "@szhsin/react-menu";
import { CaretRight } from "phosphor-react";

import { menuItemClassName } from "./CtxMenuItem";
import { getMenuClassName } from "../lib";

export const CtxSubMenu = (props: SubMenuProps) => {
  return (
    <SubMenu
      {...props}
      label={
        <div className="flex items-center">
          <>
            {props.label}
            <CaretRight size={15} className="ml-auto h-3" />
          </>
        </div>
      }
      className="relative"
      menuClassName={getMenuClassName}
      itemProps={{ className: menuItemClassName }}
    />
  );
};
