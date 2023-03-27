import React, { useState } from "react";
import SearchCard from "./searchCard";
import { useTranslation } from "react-i18next";
import axios from "axios";
import "./intro.css";
import SearchBar from "./SearchBar";

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
        props.onSearch(response.data);
      })
      .catch((error) => console.log("search", error));
  };

  return (
    <div className="full-card">
      <SearchBar onSearch={props.onSearch} />
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
