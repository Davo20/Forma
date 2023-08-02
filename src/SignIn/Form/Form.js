
import React from "react";
import "./form.scss"
import userImg from "./img/user.webp"
import {VscEyeClosed, VscEye} from "react-icons/vsc"
import {MdOutlineAlternateEmail, MdOutlineLock} from "react-icons/md"

export default function Form ({passwordEye, setPasswordEye, loginClick, openClick, forgatPasswordOpen, log, erorLogin, loginRef, passwordRef, loginChange, loginFormValueE, loginFormValueP, loginFormErrorE, loginFormErrorP, loginFormErrorEr}){
    return(
        <div>
        <div className="form">
            {log && <form action="#" onSubmit={loginClick}>
            <h2 className="siginName">Sign In</h2>
            <img src={userImg}></img>
                <div>
                    <div className="logEmail">
                        <MdOutlineAlternateEmail className="emailIcon"></MdOutlineAlternateEmail>
                        <input type="email" name="email" placeholder="Email" ref={loginRef} onChange={loginChange} value={loginFormValueE}></input>
                    </div>
                    <label style={{color: "red"}}>{loginFormErrorE}</label>
                </div>
                <div>
                    <div className="eyePassword">
                        <MdOutlineLock className="lock"></MdOutlineLock>
                        <input type={passwordEye} name="password" placeholder="Password" ref={passwordRef} className="pinput" onChange={loginChange} value={loginFormValueP}></input>
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
                    <label style={{color: "red"}}>{loginFormErrorP}</label>
                </div>
                <div>{loginFormErrorEr}</div>
                <div className="link">
                    <a href="#" onClick={forgatPasswordOpen}>Forgot Password?</a>
                    <a href="#" onClick={openClick}>Register!</a>
                </div>
                <button type="submit">Join</button> 
            </form>}
        </div>
        </div>
    )
}

