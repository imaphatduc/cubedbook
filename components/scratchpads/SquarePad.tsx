import { ChangeEvent, FC, useState } from 'react';

import InputField from '../fields/InputField';
import Scratchpad from '../Scratchpad';
import SquareEditPad from './SquareEditPad';
import SquareRenderPad from './SquareRenderPad';

interface Props {
  nodeId?: string;

  setCurrentPad: (currentPad: JSX.Element) => void;
}

const SquarePad: FC<Props> = ({ nodeId, setCurrentPad }) => {
  const [name, setName] = useState('');
  const [sideLength, setSideLength] = useState(0);

  const handleNameInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSideLengthInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSideLength(parseInt(e.target.value));
  };

  return (
    <Scratchpad tag="Square">
      {nodeId ? (
        <SquareEditPad nodeId={nodeId} name={name} sideLength={sideLength} />
      ) : (
        <SquareRenderPad
          name={name}
          sideLength={sideLength}
          setCurrentPad={setCurrentPad}
        />
      )}

      <InputField label="name" handler={handleNameInputChange} />
      <InputField label="sideLength" handler={handleSideLengthInputChange} />
    </Scratchpad>
  );
};

export default SquarePad;
