import React, { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const SearchBar = () => {
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
};

export default SearchBar;
