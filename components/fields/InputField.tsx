import { ChangeEvent, FC, HTMLInputTypeAttribute } from 'react';

interface Props {
  label: string;
  type?: HTMLInputTypeAttribute;
  value?: string | number;
  handler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: FC<Props> = ({ label, type, value, handler }) => {
  return (
    <div className="d-flex justify-content-between my-3">
      <p>{label}</p>
      <input
        type={type}
        value={value}
        onChange={handler}
        style={{ maxWidth: 100 }}
      />
    </div>
  );
};

export default InputField;
