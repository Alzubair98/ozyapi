import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./component/main/main";
import Preferencess from "./component/preferences/preferences";
import Home from "./component/Home/Home";
import Dashboard from "./component/dashboard/Dashboard";
import React, { useState, useEffect, createContext } from "react";

export const AppContext = createContext(null);

function App() {
  const [user, setUser] = useState({
    loggedInStatus: "NOT_LOGGED_IN",
    user: {},
  });

  const checkLoginStatus = () => {
    let data = JSON.parse(sessionStorage.getItem("user_id"));

    if (data && user.loggedInStatus === "NOT_LOGGED_IN") {
      setUser({
        loggedInStatus: "LOGGED_IN",
        user: data.user,
      });
      console.log("session storage", data);
    } else if (!data && user.loggedInStatus === "LOGGED_IN") {
      setUser({
        loggedInStatus: "NOT_LOGGED_IN",
        user: {},
      });
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const handleLogout = () => {
    setUser({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    });

    sessionStorage.clear();
  };

  const handleLogin = (data) => {
    setUser({
      loggedInStatus: "LOGGED_IN",
      user: data.user,
    });

    sessionStorage.setItem("user_id", JSON.stringify(data));
  };

  // for image
  const [image, setImage] = useState(AppContext);

  return (
    <AppContext.Provider value={{ image, setImage }}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main user={user} />} />
            <Route path="/preferencess" element={<Preferencess />} />
            <Route
              path="/home"
              element={
                <Home
                  handleLogin={handleLogin}
                  user={user.loggedInStatus}
                  handleLogout={handleLogout}
                />
              }
            />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppContext.Provider>
  );
}

export default App;
