import { MenuItem, type MenuItemProps } from "@szhsin/react-menu";

interface MenuItemClassName {
  disabled: boolean;
  hover: boolean;
}

export const menuItemClassName = ({ hover, disabled }: MenuItemClassName) =>
  `px-3 py-1 focus:outline-none ${hover && "text-white bg-cubedblue"} ${
    disabled && "text-gray-400"
  }`;

interface Props extends MenuItemProps {
  label: string;
}

export const CtxMenuItem = ({ label, ...props }: Props) => {
  return (
    <MenuItem {...props} className={menuItemClassName}>
      {label}
    </MenuItem>
  );
};
