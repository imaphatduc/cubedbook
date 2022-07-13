import { ChangeEvent, FC, useState } from 'react';

import InputField from '../fields/InputField';
import Scratchpad from '../Scratchpad';
import SquareEditPad from './SquareEditPad';
import SquareRenderPad from './SquareRenderPad';

import { useNodes } from '../../contexts/NodesContext';
import { useCubed } from '../../contexts/CubedContext';

interface Props {
  nodeId?: string;

  setCurrentPad: (currentPad: JSX.Element) => void;
}

const SquarePad: FC<Props> = ({ nodeId, setCurrentPad }) => {
  const { cubed } = useCubed();
  const { nodes } = useNodes();

  const currentNode = nodes.filter((node) => node.id === nodeId)[0];

  const [name, setName] = useState(currentNode?.name ?? '');

  const [sideLength, setSideLength] = useState<number>(
    currentNode?.object.width ?? 0
  );

  const [CONFIG, setCONFIG] = useState(cubed!.SHAPE_DEFAULT_CONFIG);

  const handleNameInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSideLengthInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSideLength(parseInt(e.target.value));
  };

  const handleFillColorInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fillColorInputValue = e.target.value;

    setCONFIG({
      ...CONFIG,
      fillColor: fillColorInputValue,
    });
  };

  const handleFillOpacityInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fillOpacityInputValue = parseInt(e.target.value);

    setCONFIG({
      ...CONFIG,
      fillOpacity: fillOpacityInputValue,
    });
  };

  const handleStrokeColorInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const strokeColorInputValue = e.target.value;

    setCONFIG({
      ...CONFIG,
      strokeColor: strokeColorInputValue,
    });
  };

  const handleStrokeWidthInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const strokeWidthInputValue = parseInt(e.target.value);

    setCONFIG({
      ...CONFIG,
      strokeWidth: strokeWidthInputValue,
    });
  };

  return (
    <Scratchpad tag="Square">
      {nodeId ? (
        <SquareEditPad
          nodeId={nodeId}
          name={name}
          sideLength={sideLength}
          CONFIG={CONFIG}
        />
      ) : (
        <SquareRenderPad
          name={name}
          sideLength={sideLength}
          CONFIG={CONFIG}
          setCurrentPad={setCurrentPad}
        />
      )}

      <InputField label="name" value={name} handler={handleNameInputChange} />

      <InputField
        label="sideLength"
        value={sideLength ? sideLength : ''}
        handler={handleSideLengthInputChange}
      />

      <InputField
        label="fillColor"
        value={CONFIG.fillColor ?? cubed!.SHAPE_DEFAULT_CONFIG.fillColor}
        handler={handleFillColorInputChange}
      />
      <InputField
        label="fillOpacity"
        value={CONFIG.fillOpacity ?? cubed!.SHAPE_DEFAULT_CONFIG.fillOpacity}
        handler={handleFillOpacityInputChange}
      />
      <InputField
        label="strokeColor"
        value={CONFIG.strokeColor ?? cubed!.SHAPE_DEFAULT_CONFIG.strokeColor}
        handler={handleStrokeColorInputChange}
      />
      <InputField
        label="strokeWidth"
        value={CONFIG.strokeWidth ?? cubed!.SHAPE_DEFAULT_CONFIG.strokeWidth}
        handler={handleStrokeWidthInputChange}
      />
    </Scratchpad>
  );
};

export default SquarePad;
