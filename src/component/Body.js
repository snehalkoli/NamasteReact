import RestaurentCard, { withPromotedLabel } from "./RestaurantList";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
const filterData = (searchText, restaurants) => {
  const filteredData = restaurants?.filter((restaurant) => {
    return restaurant?.data?.name
      ?.toLowerCase()
      .includes(searchText.toLowerCase());
  });

  return filteredData;
};
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const onlineStatus = useOnlineStatus();
  const { setUserName } = useContext(UserContext);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const RestaurentCardPromoted = withPromotedLabel(RestaurentCard);
  useEffect(() => {
    console.log("Use Effect Called"); //useEffect is called after the component is rendered and it will keeps the callback Function and call it after render and then it moves ahead
    fetchData();
  }, []);

  useEffect(() => {
    console.log("useEffect is called");
  }); //useEffect is called after the component is rendered and it will keeps the callback Function and call it after render and then it moves ahead

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data?.json();
    setRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  console.log("restaurants", restaurants);
  if (onlineStatus === false) {
    return (
      <div className="no-internet-connection">
        <h1>No Internet Connection</h1>
      </div>
    );
  }
  console.log("listOfRestauranted", listOfRestaurant);
  return (
    <>
      <div className="search-container p-4 ">
        <input
          type="text"
          className="px-2 py-1 rounded-md border border-solid border-black"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="px-2 py-1 bg-lime-700 ml-3  text-white rounded-md"
          onClick={() => {
            // filter the Restaurant and update the UI.

            const filteredRestaurant = listOfRestaurant.filter((res) => {
              return res.info.name

                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>
        <span className="ml-2">
          {" "}
          User Name:
          <input
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            type="text"
            className="px-2 py-1 rounded-md border border-solid border-black"
          />
        </span>
      </div>
      {/* {<Shimmer/>} */}
      <div className=" m-3 body flex gap-4 flex-wrap">
        {restaurants?.map((restaurant) => {
          return (
            <Link to={"/restaurants/" + restaurant?.info?.id}>
              {restaurant?.info?.promoted ? (
                <RestaurentCardPromoted resData={restaurant} />
              ) : (
                <RestaurentCard
                  {...restaurant.info}
                  key={restaurant?.info?.id}
                />
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
