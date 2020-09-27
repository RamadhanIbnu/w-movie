import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route
 } from "react-router-dom";
import NowPlaying from "./pages/NowPlaying";
import MyNavbar from './components/Navbar';
import DetailMovie from './components/DetailMovie';


function App() {
  return (
    <div>
      <Router>
        <MyNavbar/>
        <Switch>
          <Route path="/NowPlaying">
            <NowPlaying/>
          </Route>
          <Route path="/detailMovie/:id">
          <DetailMovie/>
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
