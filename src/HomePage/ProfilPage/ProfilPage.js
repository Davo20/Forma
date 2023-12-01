import React, {useState, useRef} from "react";
import userPic from "../Home/user.png"
import {MdSchool, MdWork, MdClose, MdBookmarkBorder, MdOutlineModeComment, MdIosShare, MdOutlineDeleteOutline, MdOutlineImage, MdMoreHoriz, MdModeComment, MdSend} from "react-icons/md"
import {TbCamera} from "react-icons/tb"
import {TfiMore} from "react-icons/tfi"
import {AiOutlineHeart} from "react-icons/ai"
import "./profilPage.scss"
import { json } from "react-router";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'


if(!localStorage.getItem("imageId")){
    localStorage.setItem("imageId", 1)
} 

if(!localStorage.getItem("myGalery")){
    localStorage.setItem("myGalery", JSON.stringify([]))
}

if(!localStorage.getItem("comment")){
    localStorage.setItem("comment", JSON.stringify([]))
}

export default function ProfilPage({info, setInfo, loginInfo, setLoginInfo}){
//    const [myShare, setMyShare] = useState(true)
   const [galery, setGalery] = useState(JSON.parse(localStorage.getItem("myGalery")))
   const [view, setView] = useState(false)
   const [clickPic, setClickPic] = useState()
   const [more, setMore] = useState(false)
   const [commentOpen, setCommentOpen] = useState(false)
   const [id, setId] = useState()
   const [comValue, setComValue] = useState([])
   const [commentSend, setCommentSend] = useState(JSON.parse(localStorage.getItem("comment")))
    const profilObj = {
        userName: "",
        email: "",
        password: "",
        phone: ""
    }

    const commentValue = useRef()
    

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
            profilObj.avatar = elem.image
        }
    })

    const galeryChange = (e)=>{
        let reader = new FileReader();  
        const pictureArr = []
        reader.onload = function(e) { 
            let myDataUrl = e.target.result;
            
                const obj = {
                    id: localStorage.getItem("imageId"),
                    image: myDataUrl
                }
                // setGalery(obj)
                pictureArr.push(obj)
                localStorage.setItem("imageId", +localStorage.getItem("imageId")+1)
                localStorage.setItem("myGalery", JSON.stringify([...JSON.parse(localStorage.getItem("myGalery")),...pictureArr]))
                // setGalery(JSON.parse(localStorage.getItem("myGalery")))
                setGalery(localStorage.getItem("myGalery"))
            }
        reader.readAsDataURL(e.target.files[0]);
    }
    
    const viewPicture = (e)=>{
        setView(true)
        galery.map((elem)=>{
            if(e.target.id == elem.id){
                setClickPic(elem.image)
            }
            setId(e.target.id)
        })
    }
    
    const setAvatar = ()=>{
        galery.map((elem)=>{
            if(id == elem.id){
                localStorage.setItem("image", elem.image)
            }
        })
    }

    const comOpen = ()=>{
        setCommentOpen(true)
    }

    const comment = ()=>{
        console.log(commentValue.current.value)
        // setComValue(commentValue.current.value)
        const arrComment = []
        info.map((elem)=>{
            if(loginInfo.id === elem.id){

                const objComment = {
                    // comImage: res,
                    userComName: elem.fullName,
                    com: commentValue.current.value
                }
                arrComment.push(objComment)
            }
        })
        localStorage.setItem("comment", JSON.stringify([...JSON.parse(localStorage.getItem("comment")), ...arrComment]))
        setCommentSend(JSON.parse(localStorage.getItem("comment")))
    }
    console.log(comValue)
    return(
        <section className="profilMain">
            <div className="profilInfo">
                <div className="profilInfoChild">
                    <div className="profilPic">
                        <img src={profilObj.avatar}></img>
                    </div>
                    <div className="profilInfoCont">
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
            </div>
            <div>
                <div>                    
                    <div className="galeryNav">
                        <h3>Galery</h3>
                    </div>
                    {galery.length == 0 ? <div>
                        <div>
                            <label for="mygalery">
                                <TbCamera></TbCamera>
                            </label>
                            <input type="file" id="mygalery" onChange={galeryChange}></input>
                            <p>Share your Picture</p>
                        </div>
                    </div> : <div className="imgMain">
                        <div className="imgMainChild">
                        {galery.map((elem, index)=>{
                        return <div key={index} onClick={()=>setView(true)} className="view">
                            <div className="imgCont" >
                                <img src={elem.image} id={elem.id} onClick={viewPicture}></img>
                            </div>
                        </div>
                        })}
                        </div>
                        <label for="myGalery">
                                <TbCamera className="addPic"></TbCamera>
                            </label>
                            <input type="file" id="myGalery" onChange={galeryChange}></input>
                    </div>}
                        {view && <div className="viewPic">
                            <div className="imageTheme">
                                <MdClose onClick={()=>setView(false)}></MdClose>
                            </div>
                            <div className="picCont">
                                <div className="picConttfirstChild">

                                <img src = {clickPic}></img>
                                </div>
                                {commentOpen && <div className="comOpen">
                                    <div style={{color: "red"}} className="comDisplay">
                                        <div className="comDisplayUser">
                                            <div className="comImageUser"> 
                                                <img src={profilObj.avatar}></img>
                                            </div>
                                            {info.map((elem)=>{
                                                return <div className="comUserName">
                                                {loginInfo.id === elem.id ? <h4 style={{color: "red"}}>{elem.fullName}</h4> : ""}
                                           </div>
                                            })}
                                        </div>
                                        <ul>
                                        {commentSend.map((elem, index)=>{
                                            return <li key={index}>
                                                <div className="comUserPic" style={{width: 40, height: 40}}>
                                                    {info.map((elem)=>{

                                                        return<img src={elem.image} style={{width: 100, height: 100}}></img>
                                                    })}
                                                </div>
                                                <div>
                                                    <h4>{elem.userComName}</h4>
                                                    <p>{elem.com}</p>
                                                </div>
                                            </li>
                                        })}
                                        </ul>
                                    </div>
                                    <div className="input">
                                    {/* <Picker data={data}/> */}
                                        <input type="text" name="comment" id="commentSend" ref={commentValue}></input>          
                                        <MdSend style={{color: "red"}} onClick={comment}></MdSend>                                
                                    </div>
                                </div>}
                            </div>
                            <div className="imageIconCont">
                                <div className="more">
                                        {!more ? <MdMoreHoriz onClick={()=>setMore(true)}></MdMoreHoriz>:
                                        <TfiMore onClick={()=>setMore(false)}></TfiMore>}
                                        {more ? <div>
                                            <ul>
                                            <li onClick={setAvatar}><MdOutlineImage></MdOutlineImage>Set as Avatar</li>
                                            <li><MdIosShare></MdIosShare>Share</li>
                                            <li><MdOutlineDeleteOutline></MdOutlineDeleteOutline>Delete</li>
                                            </ul>
                                        </div>:null}
                                        </div>
                                <div className="imageIconContChild">
                                    <div>
                                        {!commentOpen ? <MdOutlineModeComment onClick={comOpen}></MdOutlineModeComment>:
                                        <MdModeComment onClick={()=>setCommentOpen(false)}></MdModeComment>}
                                        <AiOutlineHeart></AiOutlineHeart>
                                        <MdBookmarkBorder></MdBookmarkBorder>
                                    </div>
                                </div>
                            </div>
                        </div>}
                    
                </div>
            </div>
        </section>
    )
}