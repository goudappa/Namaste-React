import { useState, useEffect } from "react";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9753386&lng=77.5877318&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    console.log(jsonData);
    setMenu(jsonData);
  };

  const restList =
    menu?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  console.log(restList);

  return (
    <div>
      <h1>Restaurant Menu</h1>
      {restList?.map((restaurant) => (
        <li key={restaurant.info.id}>{restaurant.info.name}</li>
      ))}
    </div>
  );
};
export default RestaurantMenu;
