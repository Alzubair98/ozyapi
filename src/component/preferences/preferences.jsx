import React, { useEffect } from "react";
import Card from "./card";
import "./preferencess.css";
import { useSelector } from "react-redux";
import { loadHouses } from "../../Redux/Houses/houses";
import { useDispatch } from "react-redux";

const Preferencess = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadHouses());
  }, []);
  const state = useSelector((state) => state.storeSlice);
  return (
    <>
      <div className="p-fullPage row">
        <div className="p-firstPart col-4">
          <h1>why</h1>
        </div>
        <div className="p-secondPart col-8">
          {state.map((item) => (
            <Card
              id={item.id}
              type={item.house_type}
              images={item.images_urls}
              desc={item.description}
              location={item.location}
              rooms={item.rooms}
              baths={item.bath_rooms}
              handelid={props.handelid}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Preferencess;
