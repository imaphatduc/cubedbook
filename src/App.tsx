import { ReactElement, useState } from 'react';
import { PadSection } from './components/sections/PadSection';
import { SceneSection } from './components/sections/SceneSection';

function App() {
  const [currentNodeId, setCurrentNodeId] = useState('');

  return (
    <div className="App">
      <div className="grid grid-cols-[1fr_2fr_1fr] bg-[#222] text-white">
        <div className="prose my-2 px-5 text-white">
          <SceneSection
            currentNodeId={currentNodeId}
            setCurrentNodeId={setCurrentNodeId}
          />
        </div>
        <div
          id="cubecubed"
          className="sticky top-0 right-0 bottom-0 left-0 bg-black h-screen"
        ></div>
        <div className="prose my-2 px-5 text-white">
          <PadSection currentNodeId={currentNodeId} />
        </div>
      </div>
    </div>
  );
}

export default App;
