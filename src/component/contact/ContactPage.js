import React from "react";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <div className="c-p-form container">
      <div className="c-p-form-cont card c-p-card shadow-lg rounded">
        <form
          action="https://formspree.io/f/xlezkrge"
          method="post"
          className="c-p-contact-form m-2 "
        >
          <h3 className="font-bold">{t("contactus")}</h3>
          <hr />
          <input
            name="user-name"
            type="text"
            className="form-control mb-2"
            placeholder={t("name")}
            required
          />
          <input
            name="user-mail"
            type="text"
            className="form-control mb-2"
            placeholder={t("email")}
            required
          />
          <textarea
            name="text"
            type="text"
            className="form-control mb-2"
            rows={3}
            placeholder={t("message")}
            required
          />

          <button type="submit" className="btn btn-primary">
            {t("submit")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
