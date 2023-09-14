import React, {useState, useEffect} from "react";
import user from "./user.png"
import "./home.scss";
import axios from "axios"

export default function Home({info, setInfo, loginInfo, setLoginInfo}){
    // const [info, setInfo] = useState(JSON.parse(localStorage.getItem("user")))
    // const [loginInfo, setLoginInfo] = useState(JSON.parse(localStorage.getItem("loginUser")))
    const [file, setFile] = useState()
    const [images, setImages] = useState()
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
        }
    })


    const fileChange = (e)=>{
        // console.log(e.target.files[0])
        setFile(e.target.files[0])
       
        // const newLocal = []
        // info.map((elem)=>{
            
        //         const newObj = {
        //             id: elem.id,
        //             fullName: elem.fullName,
        //             email: elem.email,
        //             phoneNumber: elem.password,
        //             birthDate: elem.birthDate,
        //             password: elem.password,
        //             resetPassword: elem.resetPassword,
        //             image: image
        //         }
        //         newLocal.push(newObj)
        //         localStorage.setItem("user", JSON.stringify(newLocal))
        //         setInfo(JSON.parse(localStorage.getItem("user")))
            
        // })
        // console.log(newLocal)
    }
    // console.log(image)
   
    const imageClick = (e) =>{
        e.preventDefault()
        const formData = new FormData()
        formData.append("file", file)
        // const objj ={
        //     method: "POST",
        //     body: formData
        // }
        axios.post("http://localhost:3000/home", formData)
        .then(res => {})
        .catch(er => console.log(er))
        // console.log(formData)
    }
   
   
    return(
        <section className="homePage">
            <div className="information">
                <div className="backgr">
                <div className="head">
                    <div className="profileImg">
                        {/* {info.map((elem)=>{

                            {image ? <img src={elem.image}></img> : 
                            <img src={elem.image}></img>}
})
} */}
                   <img src={user}></img>
                        <p>{obj.fullName}</p>
                        <p>{obj.userName}</p>
                        {/* <p>{obj.email}</p>
                        <p>{obj.password}</p> */}
                    
                    </div>
                </div>
                </div>
            </div>
           
                <input type="file" onChange={fileChange}></input>
                <button type="button" onClick={imageClick}>Upload</button>
           
        </section>
    )
}