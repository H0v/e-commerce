import "./App.css";
import Bestsellers from "./components/Bestsellers/Bestsellers";
import Catalogue from "./components/Catalogue/Catalogue";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Main />
            <Catalogue />
            <Bestsellers />
            <Footer />
          </Route>
          <Route path="/furniture">
            <Header />
          </Route>
          <Route path="/lightning">
            <Header />
          </Route>
          <Route path="/*">
            <h1>404</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
