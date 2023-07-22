// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index

import RestaurantCard from "./RestaurantCard";
import restaurantList from "../../utils/constants";
import { useState } from "react";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurant] = useState(restaurantList);

  return (
    <>
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          const filteredList = ListOfRestaurants.filter(
            {res} => res.data.avgRating > 4
          );
          setListOfRestaurant(filteredList);
        }}>Top Rated Restaurant</button>
        </div>
      <div className="restaurant-list">
        {restaurantList.map((restaurant) => {
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
