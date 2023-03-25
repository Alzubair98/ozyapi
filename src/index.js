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
        singIn: "sign in",
        logout: "logout",
        properties: "PROPERTIES IN TURKEY BUT ONLY THE GOOD ONES",
        location: "location",
        type: "house Type",
        rooms: "Rooms",
        price: "Price Range",
        ref: "Ref Number",
        search: "Search",
        hot: "HOT PROPERTIES FOR SALE IN TURKEY",
        cliets: "WATCH WHAT OUR CIENTS SA ABOUT US",
        videos: "LATEST VIDEOS FROM OUR YOUTUBE CHANLE",
        blogs: "latest Posts from our Blog",
        contactus: "Contact Us",
        name: "Name",
        email: "Email",
        message: "Write Your Message Here",
        submit: "submit",
        information: "information",
        phone: "Phone",
        items: "NO ITEMS!",
        noItems: "YOU DONT HAVE ANY THING IN YOUR WISH LIST",
        btnWishList: "Go To Properties",
        allProperties: "All Properties!",
        PropertiesDesc:
          "Here you can see all Properties to search for spesific Propertiy click the button below",
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
        singIn: "تسجيل دخول",
        logout: "تسجيل خروج",
        properties: "الخصائص في تركيا ولكن الجيدة منها فقط",
        location: "الموقع",
        type: "نوع المنزل",
        rooms: "الغرف",
        price: "السعر",
        ref: "Ref Number",
        search: "بحث",
        hot: "افضل العروض المتوفرة",
        cliets: "اراء عملائنا",
        videos: "اخر فيديوهات قناتنا علئ اليوتيوب",
        blogs: "اخر منشورات مدوناتنا",
        contactus: "تواصل معنا",
        name: "الاسم",
        email: "الايميل",
        message: "اكتب رسالتك هنا",
        submit: "ارسل",
        information: "معلومات",
        items: "!لاتوجد عناصر",
        noItems: "انت لا تملك اي عنصر في المفضلة",
        btnWishList: "اذهب الى العروض",
        allProperties: "!كل العروض",
        PropertiesDesc:
          "هنا يمكنك ان تجد جميع العروض اذا كنت تريد عرض معين اضغط على الزر في الاسفل",
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
