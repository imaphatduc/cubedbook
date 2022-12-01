import { forwardRef } from 'react';

interface Props {
  defaultValue: string | number;
}

export const InputField = forwardRef<HTMLInputElement, Props>(
  ({ defaultValue }, ref) => {
    return (
      <input
        ref={ref}
        defaultValue={defaultValue}
        className="max-w-[10rem] border-sm bg-[#0c0c0c] px-2 focus:outline-none"
      />
    );
  }
);
