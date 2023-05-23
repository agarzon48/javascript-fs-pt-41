
import { useState } from "react";
import "./Card.css";


const card = ({emoji}) => {
    const [show, getShow] = useState(false)

}
const flipCard = () => {
    
    setShow=(!show);
    
};



return (<div className={`card ${show ? "active" :``}`}> onclick = {showCard};


export default Card;
