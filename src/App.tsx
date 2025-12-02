import { Left, Right } from '@/features/main-screen';

function App() {
  return (
    <div className="App">
      <div className="grid grid-cols-[3fr_1fr] bg-[#222] text-white">
        <Left />
        <Right />
      </div>
    </div>
  );
}

export default App;
