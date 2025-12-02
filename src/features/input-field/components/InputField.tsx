import { forwardRef, type InputHTMLAttributes } from "react";

export const InputField = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className="max-w-[10rem] border-sm bg-[#0c0c0c] px-2 focus:outline-none"
    />
  );
});
