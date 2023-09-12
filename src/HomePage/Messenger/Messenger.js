import React, {useState, useEffect} from "react";
import "./mesenger.scss";

export default function Messenger({info, loginInfo}){
    const [messeg, setMesseg] = useState("")
    const [getMesseg, setGetMesseg] = useState(JSON.parse(localStorage.getItem("messeg")))
    getMesseg.map((elem)=>{
        console.log(elem.chat)
    })
    let friendName = ""
    info.map((elem)=>{
        if(loginInfo.id != elem.id){
            friendName = elem.fullName
        }
    })
    // useEffect(()=>{
    //     // localStorage.setItem("messeg", JSON.stringify(messeg))
    //     setGetMesseg(JSON.parse(localStorage.getItem("messeg")))
    // }, [getMesseg])
    console.log(getMesseg)
    const messegClick = (e) =>{
        e.preventDefault()
        const messegArr = []
        const messegForm = Array.from(new FormData(e.target))
        const messegObj = {
            chat: messegForm[0][1],
        }
        messegArr.push(messegObj)
        setMesseg(messegArr)
        localStorage.setItem("messeg", JSON.stringify([...JSON.parse(localStorage.getItem("messeg")),...messeg]))
    }
    return(
        <section className="messenger">
            <div className="chatMain">
                <div className="chatMenu">
                    {friendName}
                </div>
                <div className="chat">
                    <div className="chatList">
                        <ul>
                            {getMesseg.map((elem, index)=>{
                               return <li key={index}>{elem.chat}</li>
                                
                            })}
                        </ul>
                    </div>
                    <form action="" onSubmit={messegClick}>
                        <input type="text" name="messeges"></input>
                        {/* <textarea name="messeg" rows="4" cols="50"></textarea> */}
                        <button type="submit">Send</button>
                    </form>
                </div>
                </div>
        </section>
    )
}