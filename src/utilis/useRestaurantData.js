import { useState , useEffect } from "react";

const useRestaurantData =(swiggy_api) =>{
    const [allRestaurants, setAllRestaurants]= useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    

    
    useEffect(()=>{
        getRestaurants();
       },[]);
  
       async function getRestaurants() {
        // handle the error using try... catch
        try {
       const response = await fetch(swiggy_api);
       // if response is not ok then throw new Error
       if (!response.ok) {
         const err = response.status;
         throw new Error(err);
       } else {
         const json = await response.json();
 
         // initialize checkJsonData() function to check Swiggy Restaurant data
         async function checkJsonData(jsonData) {
           for (let i = 0; i < jsonData?.data?.cards.length; i++) {
 
             // initialize checkData for Swiggy Restaurant data
             let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
 
             // if checkData is not undefined then return it
             if (checkData !== undefined) {
               return checkData;
             }
           }
         }
 
         // call the checkJsonData() function which return Swiggy Restaurant data
         const resData = await checkJsonData(json);
 
         // update the state variable restaurants with Swiggy API data
         setAllRestaurants(resData);
         setFilteredRestaurants(resData);
       }
     } catch (error) {
       console.error(error);
     }
   }

   return [allRestaurants, filteredRestaurants]; 
};

export default useRestaurantData;