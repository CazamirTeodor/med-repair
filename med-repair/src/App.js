import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import "./App.css";
import { Switch } from "react-router-dom";
import Search from "./pages/Search";

const App = () => {
  return (
    <div className="content">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" component={Search} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
