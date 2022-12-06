import { forwardRef, InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const InputFieldWithLabel = forwardRef<HTMLInputElement, Props>(
  ({ label, ...props }, ref) => {
    return (
      <div className="flex gap-2">
        <div>{label}</div>

        <input
          {...props}
          ref={ref}
          className="max-w-[6rem] border-sm bg-[#0c0c0c] px-2 focus:outline-none"
        />
      </div>
    );
  }
);
