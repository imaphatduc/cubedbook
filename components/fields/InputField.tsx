import { ChangeEvent, FC } from 'react';

interface Props {
  label: string;
  handler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: FC<Props> = ({ label, handler }) => {
  return (
    <div className="d-flex justify-content-between my-3">
      <p>{label}</p>
      <input onChange={handler} style={{ maxWidth: 100 }} />
    </div>
  );
};

export default InputField;
