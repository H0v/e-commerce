import "./App.css";
import Bestsellers from "./components/Bestsellers/Bestsellers";
import Catalogue from "./components/Catalogue/Catalogue";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Catalogue />
      <Bestsellers />
      <Footer />
    </div>
  );
}

export default App;
