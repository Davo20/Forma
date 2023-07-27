import React from "react";
import {AiOutlineCloseCircle} from "react-icons/ai"
import "./edit.scss"

export default function Edit ({editClick, editClose}){
    return(
        <div className="editForm">
            <AiOutlineCloseCircle className="close" onClick={editClose}></AiOutlineCloseCircle>
            <form action="#" onSubmit={editClick}>
                <input type="text" name="name" placeholder="Name" required></input> 
                <input type="text" name="lastName" placeholder="Last Name" required></input> 
                <button type="submit">Save</button>
            </form>
        </div>
    )
}