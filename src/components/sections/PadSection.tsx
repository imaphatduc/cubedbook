import { ReactNode } from 'react';

import SectionHeader from './components/SectionHeader';

interface Props {
  currentPad: ReactNode;
  setCurrentPad: (currentPad: ReactNode) => void;
}

export const PadSection = ({ currentPad, setCurrentPad }: Props) => {
  return (
    <div>
      <SectionHeader header="Editor" />

      {currentPad}
    </div>
  );
};
