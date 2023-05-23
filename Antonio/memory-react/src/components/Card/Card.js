
import { useState } from "react";
import "./Card.css";


const card = ({emoji}) => {
    const [show, setShow] = useState(false)


const flipCard = () => {
    
    setShow=(!show);
}

return <div className= {`card ${show ? "active" :``}`} onclick= {flipCard}

}








export default card;
