import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./component/main/main";
import Preferencess from "./component/preferences/preferences";
import Home from "./component/Home/Home";
import Dashboard from "./component/dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/preferencess" element={<Preferencess />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
