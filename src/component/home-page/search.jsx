import React from "react";
import SearchCard from "./searchCard";
import "./intro.css";

const Search = (props) => {
  const state = props.data;
  return (
    <div className="D-card">
      <div className="p-secondPart">
        {state.map((item) => (
          <SearchCard
            id={item.id}
            type={item.house_type}
            images={item.images_urls}
            desc={item.description}
            location={item.location}
            rooms={item.rooms}
            baths={item.bath_rooms}
            size={item.size}
            refrence={item.ref_number}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
