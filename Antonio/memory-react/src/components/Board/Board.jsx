
import { useState } from "react";
import "./board.css"
import Card from "../Card/Card";

import { emojis } from "../../constants/emojis";
const board = () => {
    return  
    <div className = "div-board"> 
    {emojis.map(emoji => <Card emoji = {emoji} />)}
   {emojis.map(emoji => <Card emoji = {emoji} />)}
    
    </div>
    
}
export default board;


