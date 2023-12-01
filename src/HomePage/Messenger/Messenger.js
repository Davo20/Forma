import React, {useState, useEffect, useRef} from "react";
import "./mesenger.scss";

if(!localStorage.getItem("messeg")){
    localStorage.setItem("messeg", JSON.stringify([]))
}
if(!localStorage.getItem("messegUser")){
    localStorage.setItem("messegUser", JSON.stringify([]))
}
export default function Messenger({info, loginInfo}){
    const [getMesseg, setGetMesseg] = useState(JSON.parse(localStorage.getItem("messeg")))
    const [messegeList, setMessegeList] = useState(false)
    const [getMes, setGetMes] = useState(JSON.parse(localStorage.getItem("messegUser")))
    const [messegId, setMessegId] = useState("")
    // getMesseg.map((elem)=>{
    //     console.log(elem.chat)
    // })
    const userSelectId = useRef()
    console.log(getMes)
    const mesengerUserArr =[]
    info.map((elem)=>{
        if(loginInfo.id !== elem.id){
            const messegUser = {
                userName: elem.fullName,
                id: elem.id
            }
            mesengerUserArr.push(messegUser)
        }
    })
    // useEffect(()=>{
    //     // localStorage.setItem("messeg", JSON.stringify(messeg))
    //     setGetMesseg(JSON.parse(localStorage.getItem("messeg")))
    // }, [getMesseg])

   
    const messegClick = (e) =>{
        e.preventDefault()
        const ar = []
        const aray = []
        const messegForm = Array.from(new FormData(e.target))
        
        // const messegeObj = {
        //     id: messegId,
        //     chat: messegForm[0][1]
        // }

       
            const messegObjj = {
                id: loginInfo.id,
                chat: messegForm[0][1]
            }
            if(loginInfo.id === "1"){
                ar.push(messegObjj)
            }
            if(loginInfo.id === "3"){
                aray.push(messegObjj)
            }
                // const messegeObj = {
                //     id: loginInfo.id,
                //     chat: messegForm[0][1]
                // }
            
            
        
        
       
        localStorage.setItem("messeg", JSON.stringify([...JSON.parse(localStorage.getItem("messeg")), ...ar]))
        setGetMesseg(JSON.parse(localStorage.getItem("messeg")))
        localStorage.setItem("messegUser", JSON.stringify([...JSON.parse(localStorage.getItem("messegUser")), ...aray]))
        setGetMes(JSON.parse(localStorage.getItem("messegUser")))
       
    }

    const messegeSelectUser = (e)=>{
        
            setMessegId(e.target.id)
           
            }
            console.log(messegId)
    // getMesseg.map((elem, index)=>{
    //     elem.map((item)=>{
    //        console.log(item.chat)

    //    })
         
    //  })
    return(
        <section className="messenger">
            <div className="chatMain" id={loginInfo.id} ref={userSelectId}>
                <div className="chatMenu">
                    <ul onClick={()=>setMessegeList(true)}>           
                    {mesengerUserArr.map((elem, index)=>{
                        return <div key={index} id={elem.id} onClick={messegeSelectUser} >
                                   <li>{elem.userName}</li>
                                </div>
                    })}
                    
                    </ul>
                </div>
                {messegeList ? <div className="chat">
                    <div className="chatList">
                        <ul>
                            {/* {getMesseg.map((elem, index)=>{
                               return <li key={index}>{elem.chat}</li>
                                
                            })} */}
                            {getMesseg.map((elem, index)=>{
                                    // {elem.length == 0 ? <p style={{color: "black"}}>Datark</p> : <li key={index}>{elem.chat}</li>} 

                                   return <div key={index}>
                                   <li style={{textAlign: "left"}} >{elem.chat}</li>
                                    </div>
                            })}
                            {getMes.map((elem, index)=>{
                                    // {elem.length == 0 ? <p style={{color: "black"}}>Datark</p> : <li key={index}>{elem.chat}</li>} 

                                   return  <div key={index}>
                                    <li style={{textAlign: "right"}}>{elem.chat}</li>
                                   </div>
                              
                            })}
                        </ul>
                    </div>
                    <form action="" onSubmit={messegClick}>
                        <input type="text" name="messeges"></input>
                        {/* <textarea name="messeg" rows="4" cols="50"></textarea> */}
                        <button type="submit">Send</button>
                    </form>
                </div> : <div>Send Messege</div>}
                </div>
        </section>
    )
}