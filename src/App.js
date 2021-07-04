import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "./components/Navbar/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import ContactMe from "./pages/ContactMe";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
  
} from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/contact" exact>
            <ContactMe />
          </Route>
          <Route path="/project" exact>
            <ProjectPage />
          </Route>
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
