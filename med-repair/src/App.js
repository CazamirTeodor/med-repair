import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import Search from "./pages/Search";
import { ContextProvider } from "./components/Context";

import MyProfile from "./pages/MyProfile";
import { Navigate } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <div className="content">
      <ContextProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/my-profile" element={<MyProfile />} />
            <Route exact path="/medics" element={<Search type="medics" />} />
            <Route exact path="/clinics" element={<Search type="clinics" />} />
          </Routes>
        </Router>
      </ContextProvider>
    </div>
  );
};

export default App;
