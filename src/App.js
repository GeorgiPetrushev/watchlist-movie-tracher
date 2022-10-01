import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/style/Navigation";
import AddMovie from "./components/style/AddMovie";
import WatchList from "./components/style/WatchList";
import Watched from "./components/style/Watched";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
          <Route exact path="/">
          <WatchList />
          </Route>
          <Route path="/watched">
            <Watched />
          </Route>
          <Route path="/add-movie">
            
            <AddMovie />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
