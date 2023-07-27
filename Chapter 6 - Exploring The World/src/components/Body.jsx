// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index

import RestaurantCard from "./RestaurantCard";
import restaurantList from "../../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(restaurantList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // Optional Chaining
    setListOfRestraunt(json?.data?.cards[2]?.data?.data?.cards);
  };

  //Conditional Rendering

  return listOfRestaurant.length === 0 ? <Shimmer /> : (
    <>
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          const filteredList = listOfRestaurant.filter(
            (res) => res.data.avgRating > 4
          );
          setListOfRestaurant(filteredList);
        }}
        >
          Top Rated Restaurant</button>
        </div>
      <div className="restaurant-list">
        {listOfRestaurant.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </div>
    </>
  );
};

export default Body;
