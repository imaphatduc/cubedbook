import { useState } from 'react';
import { AnimationSection } from './components/sections/AnimationSection';
import { PadSection } from './components/sections/PadSection';
import { SceneSection } from './components/sections/SceneSection';

export interface NodeSignature {
  id: string;
  label?: string;
  type: 'Cubicon' | 'Animation' | '';
}

function App() {
  const [currentNodeSignature, setCurrentNodeSignature] =
    useState<NodeSignature>({
      id: '',
      label: '',
      type: '',
    });

  return (
    <div className="App">
      <div className="grid grid-cols-[3fr_1fr] bg-[#222] text-white">
        <div className="grid grid-rows-[2fr_1fr] overflow-hidden">
          <div className="grid grid-cols-[1fr_2fr]">
            <div className="prose my-2 px-5 text-white border-r-2 border-r-gray-500">
              <SceneSection
                currentNodeSignature={currentNodeSignature}
                setCurrentNodeSignature={setCurrentNodeSignature}
              />
            </div>
            <div
              id="cubecubed"
              className="sticky top-0 right-0 bottom-0 left-0 bg-black h-[66.6vh]"
            ></div>
          </div>

          <div className="row-span-2 border-t-2 border-t-gray-500 bg-[#111]">
            <AnimationSection
              currentNodeSignature={currentNodeSignature}
              setCurrentNodeSignature={setCurrentNodeSignature}
            />
          </div>
        </div>

        <div className="prose my-2 px-5 text-white border-l-2 border-l-gray-500">
          <PadSection currentNodeSignature={currentNodeSignature} />
        </div>
      </div>
    </div>
  );
}

export default App;
