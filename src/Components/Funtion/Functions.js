import React, {useState} from "react";
import Form from "../Form/Form";
import Edit from "../Edit/Edit"
import {AiOutlineCloseCircle, AiOutlineEdit} from "react-icons/ai";
import {GoIssueClosed} from "react-icons/go"
import "../Funtion/function.scss";

if(!localStorage.getItem("id")){
    localStorage.setItem("id", 1)
}
if(!localStorage.getItem("item")){
    localStorage.setItem("item", JSON.stringify([]))
}

export default function Function ({trueEl, setTrueEl}) {
    const [task, setTask] = useState(JSON.parse(localStorage.getItem("item")))
    const [edit, setEdit] = useState({open:false, editId:0})
    const [required, setRequired] = useState({reqName:false, reqLName:false})
    const handleClick = (e)=>{
        e.preventDefault()
        const add = Array.from(new FormData(e.target))
        if(add[0][1] === ""){
            setRequired({reqName:true})
        }
        else if(add[1][1] === ""){
            setRequired({reqLName:true})
        }
        // else if(add[0][1] === "" && add[1][1] === ""){
        //     setRequired({reqName:true, reqLName:true})
        // }
       else{
        setRequired({reqName:false, reqLName:false})
        const arr=[{
            id: localStorage.getItem("id"),
            name: add[0][1],
            lastName: add[1][1],
            complate: false
        }]
        
        localStorage.setItem("id", +localStorage.getItem("id")+1) 

        localStorage.setItem("item", JSON.stringify([...JSON.parse(localStorage.getItem("item")),...arr]))
        setTask(JSON.parse(localStorage.getItem("item")))
        console.log(task)
        
    }
    }
    const editOpen = (e)=>{
        setEdit({open:true, editId:e.target.id})
        console.log(e.target.id)
    }
    const editClose = ()=>{
        setEdit({open:false})
    }

    
    const editClick = (e)=>{
        e.preventDefault()
        const editArr = []
        const editForm = [...Array.from(new FormData(e.target))]
        JSON.parse(localStorage.getItem("item")).forEach((elem)=>{
            if(edit.editId == elem.id){
                elem.name= editForm[0][1]
                elem.lastName = editForm[1][1]
            }
            editArr.push(elem)
        })
        localStorage.setItem("item", JSON.stringify(editArr))
        setTask(JSON.parse(localStorage.getItem("item")))
        console.log(editForm)
    }

    const deleteClick = (e)=>{
        const del = JSON.parse(localStorage.getItem("item")).filter((elem)=>{
            return e.target.id != elem.id
        })
        console.log(e.target.id)
        localStorage.setItem("item", JSON.stringify(del))
        setTask(JSON.parse(localStorage.getItem("item")))
    }

    return(
        <div className="ToDoList">
            <h3>To Do List</h3>
            <Form handleClick={handleClick} reqName={required.reqName} reqLName={required.reqLName} ></Form>
            {edit.open && <div className="editCont">
                <div className="editOpen">
            <Edit editClose={editClose} editClick={editClick}></Edit>
                </div>
            </div>}
            <div className="list">
               <ul>
                {task.map((elem)=>{
                    return(
                        <li key={elem.id} className="lav">
                            <div className="namelist">{`${elem.name} ${elem.lastName}`}</div>
                        <div>
                        <AiOutlineEdit className="edit" id={elem.id} onClick={editOpen}></AiOutlineEdit>
                        <AiOutlineCloseCircle className="delete" onClick={deleteClick} id={elem.id}></AiOutlineCloseCircle>
                        </div>
                        </li>
                    )
                })}
               </ul>
            </div>
        </div>

    )
}