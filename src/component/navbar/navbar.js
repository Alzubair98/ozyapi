import React from "react";
import { useTranslation } from "react-i18next";
import "./navbar.css";

const Navbar = (props) => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <>
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              LOGO
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link n-padding"
                    aria-current="page"
                    href="/"
                  >
                    {t("Home")}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/preferencess">
                    {t("Properties")}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/wishlist">
                    {t("Wish")}
                  </a>
                </li>
                {props.user.user.admin && (
                  <li className="nav-item">
                    <a className="nav-link" href="/Dashboard">
                      {t("dashboard")}
                    </a>
                  </li>
                )}
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {t("blog")}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {t("about")}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Contact">
                    {t("contact")}
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {t("languages")}
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => handleLanguageChange("en")}
                      >
                        English
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => handleLanguageChange("ar")}
                      >
                        Arabic
                      </button>
                    </li>
                  </ul>
                </li>
                {Object.keys(props.user.user).length != 0 ? (
                  <button
                    className="btn btn-danger"
                    onClick={() => props.handleLogout()}
                  >
                    {t("logout")}
                  </button>
                ) : (
                  <a href="/home">
                    <button className="btn btn-success">{t("singIn")}</button>
                  </a>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
