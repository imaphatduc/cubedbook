import { FC } from 'react';

import DropInput from '../DropInput';

interface Props {
  label: string;
  setCubiconNodeId: (id: string) => void;
}

const DropField: FC<Props> = ({ label, setCubiconNodeId }) => {
  return (
    <div className="d-flex justify-content-between my-3">
      <p>{label}</p>
      <DropInput setCubiconNodeId={setCubiconNodeId} />
    </div>
  );
};

export default DropField;
