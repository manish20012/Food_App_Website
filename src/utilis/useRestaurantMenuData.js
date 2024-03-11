import { useState, useEffect } from "react";


const useRestaruantMenuData = (swiggy_menu_api , RESTAURANT_TYPE_KEY , MENU_ITEM_TYPE_KEY , resId) =>{
  
    const [restaurant , setRestaurant] = useState(null);
    const [menuItems,setMenuItems] = useState([]);

  
     useEffect(() => {
      getRestaurantInfo(); // call getRestaurantInfo function so it fetch api data and set data in restaurant state variable
    }, []);
  
    async function getRestaurantInfo() {
      try {
        const response = await fetch(swiggy_menu_api + resId);
        if (!response.ok) {
          const err = response.status;
          throw new Error(err);
        } else {
          const json = await response.json();
  
          // Set restaurant data
          const restaurantData =
            json?.data?.cards
              ?.map((x) => x.card)
              ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
              ?.info || null;
          setRestaurant(restaurantData);
  
          // Set menu item data
          const menuItemsData =
            json?.data?.cards
              .find((x) => x.groupedCard)
              ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
                (x) => x.card?.card
              )
              ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
              ?.map((x) => x.itemCards)
              .flat()
              .map((x) => x.card?.info) || [];

              console.log(menuItemsData);
  
          const uniqueMenuItems = [];
          menuItemsData.forEach((item) => {
            if (!uniqueMenuItems.find((x) => x.id === item.id)) {
              uniqueMenuItems.push(item);
            }
          });
          setMenuItems(uniqueMenuItems);
        }
      } catch (err) {
        setMenuItems([]);
        setRestaurant(null);
        console.error(err);
      }
    }
    return [restaurant, menuItems];
};
export default useRestaruantMenuData;