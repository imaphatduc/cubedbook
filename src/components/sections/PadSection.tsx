import { NodeSignature } from '../../App';
import { useCubed } from '../../contexts/CubedContext';
import { getAnimationPad, getCubiconPad } from '../../utils/getPad';

import SectionHeader from './components/SectionHeader';

interface Props {
  currentNodeSignature: NodeSignature;
}

export const PadSection = ({ currentNodeSignature }: Props) => {
  const { getCubiconNodeById, getAnimationNodeById } = useCubed();

  return (
    <div>
      <SectionHeader header="Editor" />

      {currentNodeSignature.id &&
        currentNodeSignature.type === 'Cubicon' &&
        getCubiconPad(getCubiconNodeById(currentNodeSignature.id))}

      {currentNodeSignature.type === 'Animation' &&
        getAnimationPad(currentNodeSignature.label)}
    </div>
  );
};
