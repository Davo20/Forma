import React from "react";

export default function ForgatP ({forgatOpen, forgatPassword, confirm, conf, okClick, newPassword, setConfirmOpen, confirmClick, passwordModify, confirmRef}){
    return(
        <div>
            {forgatOpen && <div>
                <h2>Change Password</h2>
                <form action="#" onSubmit={forgatPassword}>
                    <input type="tel" name="phone" placeholder="Phone Number"></input>
                    <button type="submit">Next</button>
                </form>
            </div>}
            {conf && <div>
                <span>{confirm}</span>
                <span>Confirm that this page is yours</span>
                <button onClick={okClick}>Ok</button>
                <button onClick={()=>setConfirmOpen(!conf)}>No</button>
            </div>}
            {newPassword && <form action="#" onSubmit={confirmClick}>
                <input type="paswword" name="password" placeholder="Password" ref={confirmRef}></input>
                {passwordModify.name && <p>{passwordModify.name}</p>}
                <input type="paswword" name="password" placeholder="Reset Password"></input>
                {passwordModify.secondName && <label>{passwordModify.secondName}</label>}
                <button type="submit">Confirm</button>
            </form>}
        </div>
    )
}