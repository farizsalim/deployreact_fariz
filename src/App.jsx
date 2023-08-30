import Navbar from "./Components/Navbar";
import "./App.css"
import Test from "./Components/Test";

function App() {
  return (
    <div className="app">
      <div className="App-header">
        <Navbar brand="Navbar" />
        <Test/>
      </div>
    </div>
  );
}

export default App;
