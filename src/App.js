import Article from "./component/home-page/article";
import Navbar from "./component/navbar/navbar";
import Intro from "./component/home-page/intro";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      {/* <Article /> */}
    </div>
  );
}

export default App;
