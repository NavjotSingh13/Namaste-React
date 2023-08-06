import { useState, useEffect } from "react";
import restaurantList from "/utils/constants";
import { useParams } from "react-router-dom";

const SingleRestaurant = () => {

  const [resInfo, setResInfo] = useState(restaurantList);

  const { resID } = useParams();

  useEffect(() => {

  }, []);

  console.log(restaurantList[0].data.id);


  return (
    <div>
        <h1>Name of the Restaurant: {restaurantList[0].data.id}</h1>
        <h4>{resID}</h4>
    </div>
  )
}

export default SingleRestaurant;