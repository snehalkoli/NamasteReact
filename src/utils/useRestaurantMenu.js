import React from "react";

function useRestaurantMenu(resId) {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData(resId);
  }, []);
  const fetchData = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const json = await data.json();
    setResInfo(json);
  };
  return resInfo;
}

export default useRestaurantMenu;
