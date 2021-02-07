import "./App.css";
import Bestsellers from "./components/Bestsellers/Bestsellers";
import Catalogue from "./components/Catalogue/Catalogue";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Catalogue />
      <Bestsellers />
    </div>
  );
}

export default App;
