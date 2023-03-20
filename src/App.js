import React, {useState} from "react";
import Game from "./Game";

export default function App(){
    const [uiSettings, setUiSettings] = useState({
        showMenu: false,
        showing: "game",
        isLoggedin: false,
        darkMode:false
    })

    function toggleDark(){
        setUiSettings((prev)=>{
            return(
                {
                    ...prev, darkMode: !prev.darkMode 
                }
            )
        })
    }

    return(
        <div className={uiSettings.darkMode ? "dark container" : "light container"}>
            <Game className={uiSettings.showing === "game" ? "show game" : "game"} toggleDark = {toggleDark} />
        </div>
    )
}