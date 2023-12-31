import React from "react";
import {BiExit} from "react-icons/bi"
import {AiOutlineCheckCircle, AiOutlineCloseCircle} from "react-icons/ai"
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Function from "../../Components/Funtion/Functions";
import Site from "../../HomePage/Site/Site"

export default function Login ({loginTrue, loginFalse, setLoginF, setLogin}){
    const localUser = localStorage.getItem("loginUser")
    return(
        <div className="checkOver">
            {/* {localUser ? <div className="loginCheck">
                <div>
                    <AiOutlineCheckCircle className="check"></AiOutlineCheckCircle>
                    <BiExit onClick={()=>localStorage.removeItem("loginUser")} className="exit"></BiExit>
                </div>
            </div> : null} */}
            {/* {localUser ? <Site /> : null} */}
            {loginFalse && <div className="loginCheck">
                <div className="falsee">
                    <AiOutlineCloseCircle className="close"></AiOutlineCloseCircle>
                    <span>Incorrect username or password</span>
                    <button onClick={()=>setLoginF(loginFalse)}>Try again</button>
                </div>
            </div>}
        </div>
    )
}