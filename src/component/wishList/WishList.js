import React, { useState } from "react";
import WishCard from "./wishCard";

const WishList = () => {
  const [existingRecords, setExistingRecords] = useState(
    JSON.parse(sessionStorage.getItem("user_like"))
  );

  const removeFromWish = (index) => {
    const updateRecords = [...existingRecords];
    updateRecords.splice(index, 1);
    sessionStorage.setItem("user_like", JSON.stringify(updateRecords));
    setExistingRecords(updateRecords);
  };

  return (
    <div className="D-card">
      {existingRecords.map((single) =>
        single.map((item, index) => (
          <div className="card" key={single.id}>
            <WishCard
              index={index}
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
              removeFromWish={removeFromWish}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default WishList;
