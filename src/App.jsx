import Navbar from "./Components/Navbar";
import "./App.scss"
import Test from "./Components/Test";

function App() {
  return (
    <div className="app">
      <div className="App-header">
        <Navbar/>
        <Test/>
      </div>
    </div>
  );
}

export default App;
