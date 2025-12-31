import mockData from "../utils/mockdata";
import {useState,useEffect} from "react";
import RestaurantCard from "./restaurantcard";
import Shimmer from "./shimmer";

const Body = () => {
let  [ListofRestaurant,setListofRestaurant]=useState([]);
let [searchText,setSearchText]=useState("");
useEffect(()=>{
  setTimeout(()=>{
    setListofRestaurant(mockData);
  },1500);
},[]);
if(ListofRestaurant.length===0){
  return <Shimmer/>;
}


  return (
    <div className="body">
      <div className="filter-btn">
        <div className="search">
          <input
  type="text"
  value={searchText}
  onChange={(e) => setSearchText(e.target.value)}
/>
<button
            onClick={() => {
              console.log(searchText);
              let filteredRest = ListofRestaurant.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setListofRestaurant(filteredRest);
            }}
          >
            search
          </button>
        </div>
        </div>
<button className="btn" onClick={()=>{
  const filteredList=ListofRestaurant.filter((res) => res.info.avgRating
>4);
  setListofRestaurant(filteredList);
}} >

  top rated restaurants
</button>

      <div className="res-container">
  {ListofRestaurant.map((res) => (
    <RestaurantCard key={res.info.id} res={res} />
  )
  )}
      </div>
      </div>
    

  );
};
export default Body;













































