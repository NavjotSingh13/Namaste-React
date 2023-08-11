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
      <div className="filter flex mx-6">
        <div className="search">
          <input type="text" classsName="search-box" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value);
          }} />
          <button className="mx-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>{
            const fileredRestaurant = restaurantList.filter((res)=>res.data.name.toLowerCase().includes(searchText.toLocaleLowerCase()) );

            setFilteredRestaurant(fileredRestaurant);

          }}>Search</button>
        </div>
        <button className="mx-6 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800" onClick={() => {
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
