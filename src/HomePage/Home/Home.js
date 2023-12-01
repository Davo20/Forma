import React, {useState, useEffect} from "react";
import user from "./user.png"
import "./home.scss";
import axios from "axios"
import {BiImageAdd} from "react-icons/bi"



export default function Home({info, setInfo, loginInfo, setLoginInfo}){
    // const [info, setInfo] = useState(JSON.parse(localStorage.getItem("user")))
    // const [loginInfo, setLoginInfo] = useState(JSON.parse(localStorage.getItem("loginUser")))
    const obj = {
        userName: "",
        email: "",
        password: ""
    }
    info.map((elem)=>{
        if(loginInfo.id === elem.id){
            obj.fullName = elem.fullName
            obj.email = elem.email
            obj.password = elem.password
            obj.userName = elem.userName
            obj.image = elem.image
        }
    })

    const fileChange = (e)=>{
        let reader = new FileReader();  
        reader.onload = function(e) { 
            let myDataUrl = e.target.result;
    // do something with the URL in the DOM,
    // then save it to local storage
        console.log(myDataUrl)
        const newLocal = []

        info.map((elem)=>{
            if(elem.id === loginInfo.id){
                elem.image = myDataUrl
            }
            newLocal.push(elem)
        })
            localStorage.setItem("user", JSON.stringify(newLocal))
            setInfo(JSON.parse(localStorage.getItem("user")))
        };  
        reader.readAsDataURL(e.target.files[0]);
    }

    return(
        <section className="homePage">
            <div className="information">
                <div className="backgr">
                <div className="head">
                    <div className="profileImg">
                        <img src={obj.image}></img>
                        <p>{obj.fullName}</p>
                        <p>{obj.userName}</p>
                        {/* <p>{obj.email}</p>
                        <p>{obj.password}</p> */}
                    <label for="picUpload">
                <BiImageAdd></BiImageAdd>
            </label>
                    </div>
                </div>
                </div>
            </div>
                <input type="file" id="picUpload" onChange={fileChange}></input>
        </section>
    )
}