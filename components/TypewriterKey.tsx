import { FC } from 'react';
import { Button } from 'react-bootstrap';

interface Props {
  label: string;
  type: 'cubicon' | 'animation';
  handler: () => void;
}

const TypewriterKey: FC<Props> = ({ label, type, handler }) => {
  return (
    <Button
      className={`ms-2 ${type === 'cubicon' ? 'btn-cubicon' : 'btn-animation'}`}
      onClick={handler}
    >
      {label}
    </Button>
  );
};

export default TypewriterKey;
