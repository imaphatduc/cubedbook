import { type PropsWithChildren } from "react";

interface Props {
  label: string;
}

export const PadOptionLayout = ({
  children,
  label,
}: PropsWithChildren<Props>) => {
  return (
    <div className="flex justify-between">
      <p className="m-0">{label}</p>
      {children}
    </div>
  );
};
