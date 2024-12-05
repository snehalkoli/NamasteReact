import React, { useEffect,useState } from "react";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState();
  useEffect(() => {
    fetchMenu();
  }, []);
  const dispatch=useDispatch();
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.4903696&lng=73.8169099&restaurantId=106033&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  const handleAddItem = () => {
    dispatch(addItem("banana"));
  
  };

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>Name of the Restaurant</h1>
      <h2>Menu</h2>
      <ul>Biryani</ul>
      <ul>Burger</ul>
      <ul>Diet Coke</ul>  
      <button onClick={handleAddItem}>Add +</button>
    </div>
  );
};

export default RestaurantMenu;
