import React from "react";
import SearchCard from "./searchCard";
import "./intro.css";
import SearchBar from "./SearchBar";

const Search = (props) => {
  const state = props.data;
  const user = props.user.user;

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
