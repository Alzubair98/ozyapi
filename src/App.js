import Article from "./component/articles/article";
import Navbar from "./component/navbar/navbar";
import Intro from "./component/home-page/intro";
import Services from "./component/services/services";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Article />
    </div>
  );
}

export default App;
