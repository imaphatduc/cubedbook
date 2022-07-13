import { ChangeEvent, FC } from 'react';

interface Props {
  label: string;
  value?: string | number;
  handler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: FC<Props> = ({ label, value, handler }) => {
  return (
    <div className="d-flex justify-content-between my-3">
      <p>{label}</p>
      <input value={value} onChange={handler} style={{ maxWidth: 100 }} />
    </div>
  );
};

export default InputField;
