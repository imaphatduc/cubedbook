import { ChangeEvent, FC, useState } from 'react';

import DropField from '../fields/DropField';
import InputField from '../fields/InputField';
import Scratchpad from '../Scratchpad';
import CreateEditPad from './CreateEditPad';
import CreatePlayPad from './CreatePlayPad';

import { AnimationNode, useNodes } from '../../contexts/NodesContext';
import { useCubed } from '../../contexts/CubedContext';

interface Props {
  nodeId?: string;

  setCurrentPad: (currentPad: JSX.Element) => void;
}

const CreatePad: FC<Props> = ({ nodeId, setCurrentPad }) => {
  const { cubed } = useCubed();
  const { nodes } = useNodes();

  const currentNode = nodes.filter(
    (node) => node.id === nodeId
  )[0] as AnimationNode;

  const [cubiconNodeId, setCubiconNodeId] = useState(
    currentNode?.cubiconNodeId ?? ''
  );

  const [duration, setDuration] = useState(
    currentNode?.object.duration ?? cubed!.ANIME.CREATE
  );

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

      <DropField
        label="cubicon"
        cubiconNodeId={cubiconNodeId}
        setCubiconNodeId={setCubiconNodeId}
      />

      <InputField
        label="duration"
        type={'number'}
        value={duration}
        handler={handleDurationInputChange}
      />
    </Scratchpad>
  );
};

export default CreatePad;
