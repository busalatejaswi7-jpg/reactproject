const RestaurantCard = ({ res }) => {
  return (
    <div className="res-card">
      <img className="res-logo"  src={res.info.imageUrl || "https://images.unsplash.com/photo-1550547660-d9450f859349"} alt={res.info.name}
/>
      <h3>{res.info.name}</h3>
      <h4>{res.info.cuisines.join(",")}</h4>
      <h4>{res.info.costForTwo}</h4>
      <h4>{res.info.avgRating}</h4>
      <h4>{res.info.sla.deliveryTime}</h4>
    </div>
  );  
};
export default RestaurantCard;
