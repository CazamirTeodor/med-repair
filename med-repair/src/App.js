import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import MyProfile from "./pages/MyProfile"

import './App.css';

const App = () => {
  return (
    <div className="content">
      <NavBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<MyProfile />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
