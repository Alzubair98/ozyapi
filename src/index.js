import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./Redux/configureStore";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import { Provider } from "react-redux";

i18n.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "en", // language to use
  resources: {
    en: {
      translation: {
        Home: "Home",
        Properties: "Properties",
        Wish: "Wish List",
        dashboard: "dashboard",
        blog: "Blog",
        about: "About",
        contact: "Contact",
        languages: "languages",
      },
    },
    ar: {
      translation: {
        Home: "الرئيسية",
        Properties: "العروض",
        Wish: "المفضله",
        dashboard: "لوحة التحكم",
        blog: "المدونات",
        about: "حول",
        contact: "تواصل",
        languages: "لغات",
      },
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
