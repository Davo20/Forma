import React from "react";
import "./forgatp.scss"

export default function ForgatP ({forgatOpen, forgatPassword, confirm, conf, okClick, newPassword, setConfirmOpen, confirmClick, passwordModify, confirmRef}){
    return(
        <div>
            {forgatOpen && <div className="forgatPNumber">
                <h2>Change Password</h2>
                <form action="#" onSubmit={forgatPassword}>
                    <input type="tel" name="phone" placeholder="Phone Number"></input>
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
                    <input type="paswword" name="password" placeholder="Password" ref={confirmRef}></input>
                    {passwordModify.name && <p>{passwordModify.name}</p>}
                    <input type="paswword" name="password" placeholder="Reset Password"></input>
                    {passwordModify.secondName && <label>{passwordModify.secondName}</label>}
                    <button type="submit">Confirm</button>
                </form>
            </div>}
        </div>
    )
}