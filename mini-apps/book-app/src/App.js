import React from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import './App.css'
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Detail from "./pages/Detail";

function App() {
  return (
    <HashRouter>
      <Navigation/>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/book-detail" component={Detail} />
    </HashRouter>
  );
}

export default App;
