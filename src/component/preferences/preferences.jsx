import React, { useEffect } from "react";
import Card from "./card";
import "./preferencess.css";
import { useSelector } from "react-redux";
import { loadHouses } from "../../Redux/Houses/houses";
import { useDispatch } from "react-redux";

const Preferencess = (props) => {
  const SaveToSession = (item) => {
    // const house = state.filter((item) => item.id === Number(event.target.id));

    const sessionRecords =
      JSON.parse(sessionStorage.getItem("user_like")) || [];

    sessionRecords.push(item);
    sessionStorage.setItem("user_like", JSON.stringify(sessionRecords));
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadHouses());
  }, []);
  const state = useSelector((state) => state.storeSlice);
  return (
    <>
      <div className="D-card">
        {state.map((item) => (
          <Card
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
            SaveToSession={SaveToSession}
          />
        ))}
      </div>
    </>
  );
};

export default Preferencess;
