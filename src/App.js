import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "./components/Navbar/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import ContactMe from "./pages/ContactMe";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  browserHistory,
  hashHistory 
} from "react-router-dom";

import ProjectPage from "./pages/ProjectPage";
let history = process.env.NODE_ENV === "production" ? browserHistory : hashHistory;
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/portfolio" exact>
            <HomePage />
          </Route>
          <Route path="/portfolio/contact" exact>
            <ContactMe />
          </Route>
          <Route path="/portfolio/project" exact>
            <ProjectPage />
          </Route>
          <Redirect to="/portfolio" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
