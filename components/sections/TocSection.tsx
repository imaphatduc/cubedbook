import { FC } from 'react';

import { CubedNode, useNodes } from '../../contexts/NodesContext';

import CreatePad from '../scratchpads/CreatePad';
import SquarePad from '../scratchpads/SquarePad';
import TocHeading from '../TocHeading';

interface Props {
  setCurrentPad: (currentPad: JSX.Element) => void;
}

const TocSection: FC<Props> = ({ setCurrentPad }) => {
  const { nodes } = useNodes();

  const handleOpenScratchpad = (node: CubedNode) => {
    switch (node.object.constructor.name) {
      case 'Square':
        setCurrentPad(
          <SquarePad nodeId={node.id} setCurrentPad={setCurrentPad} />
        );

        break;

      case 'Create':
        setCurrentPad(
          <CreatePad nodeId={node.id} setCurrentPad={setCurrentPad} />
        );

        break;
    }
  };

  return (
    <div className="typewriter-section mx-2">
      <h5 className="text-center my-3">Table of Contents</h5>

      {nodes.map((node, i) => (
        <TocHeading key={i} node={node} handler={handleOpenScratchpad} />
      ))}
    </div>
  );
};

export default TocSection;
