import { MenuItem, MenuItemTypeProp } from '@szhsin/react-menu';

interface MenuItemClassName {
  disabled: boolean;
  hover: boolean;
}

export const menuItemClassName = ({ hover, disabled }: MenuItemClassName) =>
  `px-3 py-1 focus:outline-none ${hover && 'text-white bg-cubedpurple'} ${
    disabled && 'text-gray-400'
  }`;

interface Props {
  label: string;
}

export const CtxMenuItem = ({ label }: Props) => {
  return <MenuItem className={menuItemClassName}>{label}</MenuItem>;
};
