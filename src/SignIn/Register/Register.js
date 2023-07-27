import React from "react";
import "./register.scss"
import {FcGoogle} from "react-icons/fc"
import {AiOutlineCheckCircle} from "react-icons/ai"
import {VscEyeClosed, VscEye} from "react-icons/vsc"

export default function Register({valid, passwordChange, registerClick, open, registerCloseClick, snakeBar, eror, passwordEye, setPasswordEye, passwordRegEye, setPasswordRegEye}){
    

    return(
        <div>

        {open && <div className="background">

         <div className="register">
            <h2>Register</h2>
            <form action="#" onSubmit={registerClick}>
                <div>
                    <input type="text" name="name" id="name"></input>
                    {eror.name && <label for="name">{eror.name}</label>}
                </div>
                <div>
                    <input type="email" name="email" id="email"></input>
                    {eror.email && <label for="email">{eror.email}</label>}
                </div>
                <div>
                    <input type="tel" name="phoneNumber" id="phoneNumber"></input>
                    {eror.phoneNumber && <label for="phoneNumber">{eror.phoneNumber}</label>}
                </div>
                <div>
                    <input type="date" name="birthDate" id="birthDate"></input>
                    {eror.birthDate && <label for="birthDate">{eror.birthDate}</label>}
                </div>
                <div style={{position: "relative"}}>
                    <input type={passwordEye} name="password" id="password" value={valid} onChange={passwordChange}></input>
                    {passwordEye == "password" ? (
                        <span onClick={()=>{setPasswordEye("text")}}>
                            <VscEyeClosed style={{position: "absolute", top: "12%", right: "2%"}}></VscEyeClosed>
                        </span>
                    ):(
                        <span onClick={()=>setPasswordEye("password")}>
                            <VscEye style={{position: "absolute", top: "12%", right: "2%"}}></VscEye>
                        </span>
                    )}
                    {eror.password && <label for="password">{eror.password}</label>}
                </div>
                <div style={{position: "relative"}}>
                    <input type={passwordRegEye} name="resetPassword" id="password"></input>
                    {passwordRegEye == "password" ? (
                        <span onClick={()=>{setPasswordRegEye("text")}}>
                            <VscEyeClosed style={{position: "absolute", top: "12%", right: "2%"}}></VscEyeClosed>
                        </span>
                    ):(
                        <span onClick={()=>setPasswordRegEye("password")}>
                            <VscEye style={{position: "absolute", top: "12%", right: "2%"}}></VscEye>
                        </span>
                    )}
                    {eror.resetPassword && <label for="password">{eror.resetPassword}</label>}
                </div>
                <div>
                    <button><FcGoogle></FcGoogle>Log In With Google</button>
                </div>
                <button type="submit">Register</button>
                <a href="#" onClick={registerCloseClick}>Back to Log In</a>
            </form>
        </div>
        {snakeBar && <div className="snakeBar">
            <AiOutlineCheckCircle></AiOutlineCheckCircle>
            <span>You have successfully registered</span>
        </div>}
        </div>}
        </div>
    )
}