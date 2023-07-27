
import React from "react";
import "./form.scss"
import userImg from "./img/user.webp"
import {VscEyeClosed, VscEye} from "react-icons/vsc"
import {MdOutlineAlternateEmail, MdOutlineLock} from "react-icons/md"

export default function Form ({passwordEye, setPasswordEye, loginClick, openClick, forgatPasswordOpen, log, erorLogin, loginRef, passwordRef}){
    return(
        <div className="form">
            <h2>Sign In</h2>
            <img src={userImg}></img>
            {log && <form action="#" onSubmit={loginClick}>
                <div>
                    <div className="logEmail">
                        <MdOutlineAlternateEmail className="emailIcon"></MdOutlineAlternateEmail>
                        <input type="email" name="email" placeholder="Email" ref={loginRef}></input>
                    </div>
                    {erorLogin.login && <label style={{color: "red"}}>{erorLogin.login}</label>}
                </div>
                <div>
                    <div className="eyePassword">
                        <MdOutlineLock className="lock"></MdOutlineLock>
                        <input type={passwordEye} name="password" placeholder="Password" ref={passwordRef} className="pinput"></input>
                        {passwordEye == "password" ? (
                            <span onClick={()=>setPasswordEye("text")}>
                                <VscEyeClosed className="eyeClosed"></VscEyeClosed>
                            </span>
                        ):(
                            <span onClick={()=>setPasswordEye("password")}>
                                <VscEye className="eyeOpen"></VscEye>
                        </span>
                        )}
                    </div>
                    {erorLogin.password && <label style={{color: "red"}}>{erorLogin.password}</label>}
                </div>
                <div className="link">
                    <a href="#" onClick={forgatPasswordOpen}>Forgot Password?</a>
                    <a href="#" onClick={openClick}>Register!</a>
                </div>
                <button type="submit">Join</button> 
            </form>}
        </div>
    )
}

