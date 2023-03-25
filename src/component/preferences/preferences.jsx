import React, { useEffect } from "react";
import "./preferencess.css";
import { useSelector } from "react-redux";
import { loadHouses } from "../../Redux/Houses/houses";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import SearchCard from "../home-page/searchCard";

const Preferencess = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadHouses());
  }, []);
  const state = useSelector((state) => state.storeSlice);
  return (
    <>
      <div className="all-card">
        <div className="alert alert-success alert1 ">
          <h4 className="alert-heading">{t("allProperties")}</h4>
          <p>{t("PropertiesDesc")}</p>
          <hr />
          <a href="/search" className="btn btn-primary">
            {t("search")}
          </a>
        </div>
        <div className="D-card P-card">
          {state.map((item) => (
            <SearchCard
              item={item}
              id={item.id}
              type={item.house_type}
              images={item.images_urls}
              desc={item.description}
              location={item.location}
              rooms={item.rooms}
              baths={item.bath_rooms}
              size={item.size}
              price={item.price}
              refrence={item.ref_number}
              mode={true}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Preferencess;
