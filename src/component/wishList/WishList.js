import React from "react";
import SearchCard from "../home-page/searchCard";

const WishList = () => {
  let data = JSON.parse(sessionStorage.getItem("user_like"));

  return (
    <div className="D-card">
      {data.map((single) =>
        single.map((item) => (
          <div className="card" key={single.id}>
            <SearchCard
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
          </div>
        ))
      )}
    </div>
  );
};

export default WishList;
