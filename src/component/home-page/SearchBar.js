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
};

export default SearchBar;
