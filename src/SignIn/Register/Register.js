import React from "react";
import "./register.scss"
import {FcGoogle} from "react-icons/fc"
import {AiOutlineCheckCircle, AiOutlineUserAdd} from "react-icons/ai"
import {VscEyeClosed, VscEye} from "react-icons/vsc"
import {MdOutlineAlternateEmail, MdOutlineLock} from "react-icons/md"
import {BsTelephone} from "react-icons/bs"

export default function Register({registerChange, valid, passwordChange, registerClick, open, registerCloseClick, snakeBar, eror, passwordEye, setPasswordEye, passwordRegEye, setPasswordRegEye, formRegisterValuesN, formRegisterValuesE, formRegisterValuesPN, formRegisterValuesB, formRegisterValuesP, formRegisterValuesRP, registerErrorsN, registerErrorsE, registerErrorsPN, registerErrorsB, registerErrorsP, registerErrorsRP}){
    

    return(
        <div>

        {open && <div className="background">

         <div className="register">
            <form action="#" onSubmit={registerClick}>
            <h2>Sign Up</h2>
                <label>Full Name</label>
                <div className="inputCont">
                    <AiOutlineUserAdd></AiOutlineUserAdd>
                    <input type="text" name="fullName" id="name" onChange={registerChange} value={formRegisterValuesN}></input>             
                </div>
                <p>{registerErrorsN}</p>
                <label>Email</label>
                <div className="inputCont">
                    <MdOutlineAlternateEmail></MdOutlineAlternateEmail>
                    <input type="email" name="email" id="email" onChange={registerChange} value={formRegisterValuesE}></input>
                </div>
                <p>{registerErrorsE}</p>
                <label>Phone Number</label>
                <div className="inputCont"> 
                    <BsTelephone></BsTelephone>
                    <input type="tel" name="phoneNumber" id="phoneNumber" onChange={registerChange} value={formRegisterValuesPN}></input>
                </div>
                <p>{registerErrorsPN}</p>
                <label>Birth date</label>
                <div className="inputContB">
                    <input type="date" name="birthDate" id="birthDate" onChange={registerChange} value={formRegisterValuesB}></input>
                </div>
                <p>{registerErrorsB}</p>
                <label>Password</label>
                <div className="inputContP">
                    <MdOutlineLock></MdOutlineLock>
                    <input type={passwordEye} name="password" id="password" value={formRegisterValuesP} onChange={registerChange} ></input>
                    {passwordEye == "password" ? (
                        <span onClick={()=>{setPasswordEye("text")}}>
                            <VscEyeClosed className="passwordWatch"></VscEyeClosed>
                        </span>
                    ):(
                        <span onClick={()=>setPasswordEye("password")}>
                            <VscEye className="passwordWatch"></VscEye>
                        </span>
                    )}
                </div>
                <p>{registerErrorsP}</p>
                <label>Reset password</label>
                <div className="inputContP">
                    <MdOutlineLock></MdOutlineLock>
                    <input type={passwordRegEye} name="resetPassword" id="password" onChange={registerChange} value={formRegisterValuesRP}></input>
                    {passwordRegEye == "password" ? (
                        <span onClick={()=>{setPasswordRegEye("text")}}>
                            <VscEyeClosed className="passwordWatch"></VscEyeClosed>
                        </span>
                    ):(
                        <span onClick={()=>setPasswordRegEye("password")}>
                            <VscEye className="passwordWatch"></VscEye>
                        </span>
                    )}
                </div>
                <p>{registerErrorsRP}</p>
                <button type="submit">Register</button>
                <a href="#" className="back" onClick={registerCloseClick}>Back to Log In</a>
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