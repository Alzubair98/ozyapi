import React, { useState } from "react";
import SearchCard from "./searchCard";
import { useTranslation } from "react-i18next";
import axios from "axios";
import "./intro.css";

const Search = (props) => {
  const state = props.data;
  const user = props.user.user;

  const { t } = useTranslation();

  const [priceRange, setPriceRange] = useState("");
  const [location, setLocation] = useState("");
  const [rooms, setRooms] = useState("");
  const [houseType, setHouseType] = useState("");
  const [refNumber, setRefNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios
      .get("http://localhost:3001/search", {
        params: {
          location: location,
          rooms: rooms,
          house_type: houseType,
          price: priceRange,
          ref_number: refNumber,
        },
      })
      .then((response) => {
        console.log("api call", response.data);
        props.onSearch(response.data);
      })
      .catch((error) => console.log("search", error));
  };

  return (
    <div className="full-card">
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <div className="g-3 ms-6 ps-3 pe-3">
            <div className="">
              <select
                className="form-control"
                id="location"
                name="location"
                onChange={(e) => setLocation(e.target.value)}
              >
                <option>{t("location")}</option>
                <option value="istanbull">Istanbul</option>
                <option value="adana">adana</option>
                <option value="ankara">ankara</option>
              </select>
            </div>
            <div className="pt-2">
              <select
                className="form-control"
                id="house-type"
                name="house-type"
                onChange={(e) => setHouseType(e.target.value)}
              >
                <option>{t("type")}</option>
                <option value="new house 3">new house 3</option>
                <option value="normal house">normal house</option>
                <option value="big house">big house</option>
              </select>
            </div>
            <div className="pt-2">
              <select
                className="form-control"
                id="rooms"
                name="rooms"
                onChange={(e) => setRooms(e.target.value)}
              >
                <option>{t("rooms")}</option>
                <option value="2">1+1 room</option>
                <option value="3">2+1 room</option>
                <option value="4">3+1 room</option>
                <option value="5">4+1 room</option>
              </select>
            </div>
            <div className="pt-2">
              <select
                className="form-control"
                id="location"
                name="location"
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <option>{t("price")}</option>
                <option value="1000-2000">1000-2000</option>
                <option value="2000-3000">2000-3000</option>
                <option value="3000-4000">3000-4000</option>
                <option value="4000-5000">4000-5000</option>
                <option value="5000-6000">5000-6000</option>
              </select>
            </div>
            <div className="pt-2">
              <input
                value={refNumber}
                name="ref_number"
                type="text"
                className="form-control"
                placeholder={t("ref")}
                aria-label="Last name"
                onChange={(e) => setRefNumber(e.target.value)}
              />
            </div>
            <div className="col-auto pt-2">
              <button type="submit" className="btn btn-primary">
                {t("search")}
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="D-card">
        {state.map((item) => (
          <SearchCard
            deleteFromAPI={props.deleteFromAPI}
            user={user}
            mode={true}
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
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
