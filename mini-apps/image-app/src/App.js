import React from "react";
import { Route, HashRouter } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import MyAlbum from "./pages/MyAlbum";
import Navigation from "./components/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation/>
      <Route path="/" exact={true} component={Home} />
      <Route path="/myalbum" component={MyAlbum} />
    </HashRouter>
  );
}

export default App;
