import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../util/constants";

const RestaurantMenu = () =>{
    const {resId} = useParams();
    console.log(resId)
    //to store the data, fetched from API, uerState()
    const[resInfo, setRestInfo] = useState(null);

    //fetch the data from API
    useEffect(()=>{
        fetchMenu()},[])

    const fetchMenu = async()=>{
        const data = await fetch(MENU_API+resId+"&isMenuUx4=true&submitAction=ENTER");
        const json = await data.json();
        setRestInfo(json.data)
    }

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
                {cards.map((item)=> <li>{item.card.card.title}</li> )}
            </ul>
        </div>
    )
}
export default RestaurantMenu;