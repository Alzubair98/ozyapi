import React from "react";
import SearchCard from "./searchCard";
import "./intro.css";

const Search = (props) => {
  const state = props.data;
  const SaveToSession = (item) => {
    // const house = state.filter((item) => item.id === Number(event.target.id));

    const sessionRecords =
      JSON.parse(sessionStorage.getItem("user_like")) || [];

    sessionRecords.push(item);
    sessionStorage.setItem("user_like", JSON.stringify(sessionRecords));
  };
  return (
    <div className="D-card">
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
          SaveToSession={SaveToSession}
        />
      ))}
    </div>
  );
};

export default Search;
