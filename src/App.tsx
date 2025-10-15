import Gradient from "./components/Gradient";
import Header from "./components/Header";

function App() {
  return (
    <div className=" bg-bg-01 min-h-screen ">
      <Gradient />
      <div className=" relative z-[2] ">
        <Header />
      </div>
    </div>
  );
}

export default App;
