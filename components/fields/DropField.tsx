import { FC } from 'react';

import DropInput from '../DropInput';

interface Props {
  label: string;
  cubiconNodeId: string;
  setCubiconNodeId: (id: string) => void;
}

const DropField: FC<Props> = ({ label, cubiconNodeId, setCubiconNodeId }) => {
  return (
    <div className="d-flex justify-content-between my-3">
      <p>{label}</p>
      <DropInput
        cubiconNodeId={cubiconNodeId}
        setCubiconNodeId={setCubiconNodeId}
      />
    </div>
  );
};

export default DropField;
