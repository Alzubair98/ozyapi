import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./component/main/main";
import Preferencess from "./component/preferences/preferences";
import Home from "./component/Home/Home";
import Dashboard from "./component/dashboard/Dashboard";
import React, { useState, useEffect } from "react";
import Navbar from "./component/navbar/navbar";
import Details from "./component/preferences/details";
import Search from "./component/home-page/search";
import WhatsApp from "./component/contact/whatsApp";

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

  const [id, setId] = useState(0);

  const handelid = (e) => {
    const button = e.target;
    setId(Number(button.id));
  };

  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (data) => {
    setSearchResults(data);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar user={user} handleLogout={handleLogout} />
        <Routes>
          <Route
            path="/"
            element={<Main user={user} onSearch={handleSearch} />}
          />
          <Route
            path="/preferencess"
            element={<Preferencess handelid={handelid} />}
          />
          <Route
            path="/home"
            element={
              <Home handleLogin={handleLogin} user={user.loggedInStatus} />
            }
          />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="/details" element={<Details buttonId={id} />} />
          <Route path="/search" element={<Search data={searchResults} />} />
        </Routes>
        <WhatsApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
