import { ChangeEvent, FC, useState } from 'react';

import DropField from '../fields/DropField';
import InputField from '../fields/InputField';
import Scratchpad from '../Scratchpad';
import CreateEditPad from './CreateEditPad';
import CreatePlayPad from './CreatePlayPad';

interface Props {
  nodeId?: string;

  setCurrentPad: (currentPad: JSX.Element) => void;
}

const CreatePad: FC<Props> = ({ nodeId, setCurrentPad }) => {
  const [cubiconNodeId, setCubiconNodeId] = useState('');
  const [duration, setDuration] = useState(0);

  const handleDurationInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDuration(parseInt(e.target.value));
  };

  return (
    <Scratchpad tag="Create">
      {nodeId ? (
        <CreateEditPad
          nodeId={nodeId}
          cubiconNodeId={cubiconNodeId}
          duration={duration}
        />
      ) : (
        <CreatePlayPad
          cubiconNodeId={cubiconNodeId}
          duration={duration}
          setCurrentPad={setCurrentPad}
        />
      )}

      <DropField label="cubicon" setCubiconNodeId={setCubiconNodeId} />
      <InputField label="duration" handler={handleDurationInputChange} />
    </Scratchpad>
  );
};

export default CreatePad;
