
import { useState } from "react";
import "./board.css"
import Card from "../Card/Card";

import { emojis as initialEmojis } from "../../constants/emojis";

const board = () => {
    const [emojis, setEmojis] = useState(initialEmojis);
    console.log(emojis);

    
    return }
    <div className = "div-board"> 
   {emojis.map(emoji => <Card emoji = {emoji} />)}
   {emojis.map(emoji => <Card emoji = {emoji} />)}
    
    </div>

    
export default board;


 