import React from "react";
import "./inputdata.css";
const InputData = () => {
    return (
        <div>
            <form>
                <input type = "text" placeholder="enter your name"></input>
                <input type = "tel" placeholder="enter your phone number"></input>
                <input type = "submit" value="추가"></input>
            </form>
        </div>
    )
}
export default InputData;