import React, {useState} from "react";
import userPic from "../Home/user.png"
import {MdSchool, MdWork} from "react-icons/md"
import "./profilPage.scss"

export default function ProfilPage({info, setInfo, loginInfo, setLoginInfo}){
    const profilObj = {
        userName: "",
        email: "",
        password: "",
        phone: ""
    }
    let userAge = 0
    info.map((elem)=>{
        if(loginInfo.id === elem.id){
            profilObj.fullName = elem.fullName
            profilObj.email = elem.email
            profilObj.password = elem.password
            const year = new Date()
            const d = new Date(elem.birthDate)
            const b = new Date(year - d)
            const age = b.getFullYear() - 1970
            userAge = userAge + age
            profilObj.phone = elem.phoneNumber
            profilObj.userName = elem.userName
            profilObj.location = elem.location
            profilObj.addres = elem.addres
        }
    })
    return(
        <section className="profilMain">
            <div>
                <div>
                    <div className="profilPic">
                        <img src={userPic}></img>
                    </div>
                    <ul>
                        <li>{`Fullname: ${profilObj.fullName}`}</li>
                        <li>{`Age: ${userAge}`}</li>
                        <li>{`Phone: ${profilObj.phone}`}</li>
                        <li><MdSchool></MdSchool></li>
                        <li><MdWork></MdWork></li>
                        <li>{`Username: ${profilObj.userName}`}</li>
                        <li>{`Addres: ${profilObj.addres}-${profilObj.location}`}</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}