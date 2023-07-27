import React, {useState} from "react";
import {BsExclamationCircle} from "react-icons/bs";
import "../Form/form.scss";

export default function Form ({handleClick, reqName, reqLName}){
    return(
        <div className="form">
            <form action="#" onSubmit={handleClick}>
                <div>
                    <input name="name" type="text"></input>
                    {reqName && <BsExclamationCircle className="req"/>}
                </div>
                <div>
                    <input name="lastName" type="text"></input>
                    {reqLName && <BsExclamationCircle className="req"/>}
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}