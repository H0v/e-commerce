import "./App.css";
import Catalogue from "./components/Catalogue/Catalogue";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Catalogue />
    </div>
  );
}

export default App;
