import { useState } from "react";
import {ModalComponent} from './Modal/Modal'

export function InfoBar (){
    const [togglePopup, setTogglePopup] = useState(true);
    const changeTogglePopup = () => setTogglePopup(!togglePopup);

    return (
        <>
        <div className="text-center" style={{padding:"10px", fontSize: "1.25rem", color:"red"}} onClick={() => setTogglePopup(!togglePopup)}>
                Subskrybuj nas i otrzymaj 40zł na Twoje zakupy!
        </div>

        
        {togglePopup ? (
            <ModalComponent show={togglePopup} onHide={changeTogglePopup} />
        ): null}
       </>
   )
}