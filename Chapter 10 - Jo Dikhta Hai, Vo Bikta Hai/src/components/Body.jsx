// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index

import RestaurantCard from "./RestaurantCard";
import restaurantList from "../../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(restaurantList);
  const [filteredRestaurant, setFilteredRestaurant] = useState(restaurantList);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://navjotsingh13.github.io/FoodAPI/food_api.json"
    );

    const json = await data.json();

    // Optional Chaining
    setListOfRestraunt(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  };


  const onlineStatus = useOnlineStatus();
  
  if (onlineStatus === false) 
    return (<h1>You are Offline</h1>);

  //Conditional Rendering

  return listOfRestaurant.length === 0 ? <Shimmer /> : (
    <>
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" classsName="search-box" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value);
          }} />
          <button onClick={()=>{
            const fileredRestaurant = restaurantList.filter((res)=>res.data.name.toLowerCase().includes(searchText.toLocaleLowerCase()) );

            setFilteredRestaurant(fileredRestaurant);

          }}>Search</button>
        </div>
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
        {filteredRestaurant.map((restaurant) => {
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
