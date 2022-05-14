import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import LandingNotAuth from "./pages/LandingNotAuth/LandingNotAuth";
import LandingAuth from "./pages/LandingAuth/LandingAuth";

const App = () => {
  return (
    <div className="content">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingAuth />} />
          <Route exact path="/login" element={<Login />} />

          <Route path="*" element={<LandingNotAuth />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
