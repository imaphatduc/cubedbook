import { ReactElement } from 'react';

import SectionHeader from './components/SectionHeader';

interface Props {
  currentPad: ReactElement;
  setCurrentPad: (currentPad: ReactElement) => void;
}

export const PadSection = ({ currentPad, setCurrentPad }: Props) => {
  return (
    <div>
      <SectionHeader header="Editor" />

      {currentPad}
    </div>
  );
};
