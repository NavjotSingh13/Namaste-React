import { useState, useEffect } from "react";
import restaurantList from "/utils/constants";

const SingleRestaurant = () => {

  const [resInfo, setResInfo] = useState(restaurantList);

  useEffect(() => {

  }, []);


  return (
    <div>
        <h1>Name of the Restaurant:</h1>
    </div>
  )
}

export default SingleRestaurant;