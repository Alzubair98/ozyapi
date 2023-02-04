import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./component/main/main";
import Preferencess from "./component/preferences/preferences";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/preferencess" element={<Preferencess />} />
      </Routes>
    </div>
  );
}

export default App;
