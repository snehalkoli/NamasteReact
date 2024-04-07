import RestaurentCard from './RestaurantList';
import { restaurantsList } from '../Constant.js';
import { useState } from 'react';

const filterData = (searchText, restaurants) => {
  const filteredData = restaurants?.filter(restaurant => {
    return restaurant?.data?.name
      ?.toLowerCase()
      .includes(searchText.toLowerCase());
  });

  return filteredData;
};
const Body = () => {
  const [searchText, setSearchText] = useState('');
  const [restaurants, setRestaurants] = useState(restaurantsList);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={e => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const data = filterData(searchText, restaurants);

            setRestaurants(data);
            console.log(restaurants);
          }}
          className="search-btn"
        >
          Search
        </button>
      </div>
      <div className="body">
        {restaurants?.map(restaurant => {
          return (
            <RestaurentCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
