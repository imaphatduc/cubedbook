import { ReactElement } from 'react';
import { useCubed } from '../../contexts/CubedContext';
import { getPad } from '../../utils/getPad';

import SectionHeader from './components/SectionHeader';

interface Props {
  currentNodeId: string;
}

export const PadSection = ({ currentNodeId }: Props) => {
  const { getCubiconNodeById } = useCubed();

  const cubiconNode = getCubiconNodeById(currentNodeId);

  return (
    <div>
      <SectionHeader header="Editor" />

      {currentNodeId && getPad(cubiconNode)}
    </div>
  );
};
