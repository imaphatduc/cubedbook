import { NodesSection } from './components/sections/NodesSection';
import { PadSection } from './components/sections/PadSection';
import { SceneSection } from './components/sections/SceneSection';

function App() {
  return (
    <div className="App">
      <div className="grid grid-cols-[1fr_2fr_1fr] bg-[#111]">
        <div className="prose grid grid-rows-[1fr_1fr] my-2 px-5">
          <SceneSection />
          <NodesSection />
        </div>
        <div
          id="cubecubed"
          className="sticky top-0 right-0 bottom-0 left-0 bg-black h-screen"
        ></div>
        <div className="prose my-2 px-5">
          <PadSection />
        </div>
      </div>
    </div>
  );
}

export default App;
