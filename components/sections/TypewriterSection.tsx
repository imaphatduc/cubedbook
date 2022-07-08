import { FC } from 'react';

import SquarePad from '../scratchpads/SquarePad';
import CreatePad from '../scratchpads/CreatePad';
import TypewriterKey from '../TypewriterKey';

interface Props {
  setCurrentPad: (currentPad: JSX.Element) => void;
}

const TypewriterSection: FC<Props> = ({ setCurrentPad }) => {
  return (
    <div className="typewriter-section">
      <h5 className="text-center my-3">Typewriter</h5>

      <div className="typewriter-keys">
        <TypewriterKey
          label="Square"
          type="cubicon"
          handler={() => {
            setCurrentPad(<SquarePad setCurrentPad={setCurrentPad} />);
          }}
        />

        <TypewriterKey
          label="Create"
          type="animation"
          handler={() => {
            setCurrentPad(<CreatePad setCurrentPad={setCurrentPad} />);
          }}
        />
      </div>
    </div>
  );
};

export default TypewriterSection;
