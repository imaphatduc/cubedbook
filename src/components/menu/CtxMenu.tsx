import { ControlledMenu, MenuState } from '@szhsin/react-menu';
import { PropsWithChildren } from 'react';

export const menuClassName = ({ state }: { state: MenuState }) =>
  `box-border z-50 text-sm bg-[#444] rounded-sm shadow-xl select-none focus:outline-none min-w-[12rem] ${
    state === 'open' && 'animate-fadeIn space-y-2 p-0 pb-2 list-none'
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

export const CtxMenu = ({
  children,
  menuProps,
  toggleMenu,
  anchorPoint,
}: PropsWithChildren<Props>) => {
  return (
    <ControlledMenu
      {...menuProps}
      menuClassName={menuClassName}
      anchorPoint={anchorPoint}
      onClose={() => toggleMenu(false)}
    >
      {children}
    </ControlledMenu>
  );
};
