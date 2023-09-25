import Navbar from "./Components/Navbar";
import "./App.scss"
import Home from "./Page/Home";
import List from "./Components/List";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Register from "./Page/Register";
import News from "./Page/News";

function App() {


  return (
    <Router>
      <div className="app">
        <div className="App-header">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/list" element={<List />} />
            <Route path="/news" element={<News/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
