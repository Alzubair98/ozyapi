import React from "react";
import Card from "../preferences/card";

const Search = (props) => {
  const state = props.data;
  return (
    <>
      {state.map((item) =>
        item.images_urls.map((image) => console.log("image", image))
      )}
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
    </>
  );
};

export default Search;
