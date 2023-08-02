import React, { useState } from "react";
import "./forgatp.scss";
import {VscEyeClosed, VscEye} from "react-icons/vsc";

export default function ForgatP ({pNewEye, pNewRegEye, setPNewEye, setNewPEye, forgatOpen, forgatPassword, confirm, conf, okClick, newPassword, setConfirmOpen, confirmClick, handleChange, confirmRef, formValuesP, formValuesPR, newPasswordErrorsP, newPasswordErrorsR}){
    return(
        <div className="jj">
            {forgatOpen && <div className="forgatPNumber">
                <h2>Change Password</h2>
                <form action="#" onSubmit={forgatPassword}>
                    <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange}></input>
                    <button type="submit" className="btNext">Next</button>
                </form>
            {conf && <div className="conf">
                <p>{`${confirm} ${"Confirm that this page is yours"}`}</p>
                <button onClick={okClick} className="btOk">Ok</button>
                <button onClick={()=>setConfirmOpen(!conf)} className="btNo">No</button>
            </div>}
            </div>}
            {newPassword && <div className="newPassword">
                <h3>New Password</h3>
                <form action="#" onSubmit={confirmClick}>
                    <div>
                        <input type={pNewEye} name="password" placeholder="Password" ref={confirmRef} value={formValuesP} onChange={handleChange}></input>
                        {pNewEye == "password" ? (
                            <span onClick={()=>setPNewEye("text")}>
                                <VscEyeClosed className="eyeClosed"></VscEyeClosed>
                            </span>
                        ):(
                            <span onClick={()=>setPNewEye("password")}>
                                <VscEye className="eyeOpen"></VscEye>
                            </span>
                        )}
                    </div>
                    <p>{newPasswordErrorsP}</p>
                    <div>
                        <input type={pNewRegEye} name="resetPassword" placeholder="Reset Password" value={formValuesPR} onChange={handleChange}></input>
                        {pNewRegEye == "password" ? (
                            <span onClick={()=>setNewPEye("text")}>
                                <VscEyeClosed className="eyeClosed"></VscEyeClosed>
                            </span>
                        ):(
                            <span onClick={()=>setNewPEye("password")}>
                                <VscEye className="eyeOpen"></VscEye>
                            </span>
                        )}
                    </div>
                    <p>{newPasswordErrorsR}</p>
                    <button type="submit">Confirm</button>
                </form>
            </div>}
        </div>
    )
}