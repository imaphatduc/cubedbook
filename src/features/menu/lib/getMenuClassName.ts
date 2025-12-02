import type { MenuState } from "@szhsin/react-menu";

export const getMenuClassName = ({ state }: { state: MenuState }) =>
  `box-border z-50 text-sm bg-[#444] shadow-xl select-none focus:outline-none min-w-[12rem] ${
    state === "open" &&
    "animate-fadein space-y-2 pb-2 pt-1 cursor-pointer list-none"
  } ${state === "closed" && "animate-fadeout"}`;
