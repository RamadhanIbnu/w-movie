import { 
  BrowserRouter as Router,
  Switch,
  Route
 } from "react-router-dom";
import NowPlaying from "./pages/NowPlaying";
import MyNavbar from './components/Navbar';
import Home from "./pages/Home";
// import DetailMovie from './components/DetailMovie';


function App() {
  return (
    <div>
      <Router>
        <MyNavbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/nowplaying">
            <NowPlaying/>
          </Route>
          <Route path="/myfav">
          {/* <DetailMovie/> */}
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
