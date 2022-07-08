import type { NextPage } from 'next';

import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import TypewriterSection from '../components/sections/TypewriterSection';
import ScratchpadSection from '../components/sections/ScratchpadSection';
import TocSection from '../components/sections/TocSection';
import ColumnsLayout from '../components/ColumnsLayout';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  const sideRatio = 3;
  const mainRatio = 6;

  const [currentPad, setCurrentPad] = useState(<></>);

  const columns = [
    {
      ratio: sideRatio,
      components: [
        <TocSection key={0} setCurrentPad={setCurrentPad} />,
        <TypewriterSection key={1} setCurrentPad={setCurrentPad} />,
      ],
    },
    {
      ratio: mainRatio,
      components: [
        <div
          key={0}
          id="cubecubed"
          style={{
            position: 'sticky',
            top: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#000',
            height: '100vh',
          }}
        ></div>,
      ],
    },
    {
      ratio: sideRatio,
      components: [<ScratchpadSection key={0} scratchpad={currentPad} />],
    },
  ];

  return (
    <DndProvider backend={HTML5Backend}>
      <Layout>
        <ColumnsLayout columns={columns} />
      </Layout>
    </DndProvider>
  );
};

export default Home;
