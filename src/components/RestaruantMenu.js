import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaruantMenu from "../util/useRestaruantMenu";

const RestaurantMenu = () =>{
    const {resId} = useParams();

        //custom hook
        const resInfo = useRestaruantMenu(resId);

        //Shimmer UI
        if(resInfo === null) return  <Shimmer/>;

        const{name,cuisines, costForTwoMessage, } = resInfo?.cards[2]?.card?.card?.info;
        const {cards} = resInfo.cards[5].groupedCard.cardGroupMap.REGULAR

    return (
        <div>
            <h1>{name}</h1>
            <h3>{cuisines.join(",")}</h3>
            <h3>{costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {cards.map((item)=> <li > {item.card.card.title}</li> )}
            </ul>
        </div>
    )
}
export default RestaurantMenu;