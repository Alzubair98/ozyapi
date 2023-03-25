import React, { useEffect } from "react";
import "./preferencess.css";
import { useSelector } from "react-redux";
import { loadHouses } from "../../Redux/Houses/houses";
import { useDispatch } from "react-redux";
import SearchCard from "../home-page/searchCard";

const Preferencess = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadHouses());
  }, []);
  const state = useSelector((state) => state.storeSlice);
  return (
    <>
      <div className="all-card">
        <div className="alert alert-success alert1 ">
          <h4 className="alert-heading">All Properties!</h4>
          <p>
            Here you can see all Properties to search for spesific Propertiy
            click the button below
          </p>
          <hr />
          <a href="/search" className="btn btn-primary">
            search
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
