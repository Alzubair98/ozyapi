import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./component/main/main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
