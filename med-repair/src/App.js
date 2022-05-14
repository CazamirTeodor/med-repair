import { BrowserRouter, Routes, Navigate } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import Login from "./pages/Login/Login";
import LandingNotAuth from "./pages/LandingNotAuth/LandingNotAuth";
import LandingAuth from "./pages/LandingAuth/LandingAuth";

import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

function App() {
  const auth = true;
  return (
    <div className="App">
      <BrowserRouter>
        <div className="content">
          <Routes>
            <PublicRoute
              path="/login"
              component={Login}
              isAuthenticated={auth}
            />

            {/* <Navbar /> */}
            <PrivateRoute
              path="/landingnotauth"
              component={LandingNotAuth}
              isAuthenticated={auth}
            />
            <PrivateRoute
              path="/landingauth"
              component={LandingAuth}
              isAuthenticated={auth}
            />

            <Navigate to={auth ? "/landingauth" : "/login"} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
