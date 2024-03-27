import Kit from "./components/kit/Kit";
import Header from "./components/layout/Header";
import useAnimateFrame from "./logic/animator";
import useGameLooper from "./logic/game.looper";

function App() {
  const { runGameLoop } = useGameLooper();

  // Runs our game loop based on user's framerate
  useAnimateFrame((deltaTime: number) => {
    runGameLoop(deltaTime);
  });

  return (
    <div className="bg-slate-200 h-screen w-screen">
      <div className="h-full m-auto">
        <Header />

        <div className="p-8">
          <Kit />
        </div>
      </div>
    </div>
  );
}

export default App;
