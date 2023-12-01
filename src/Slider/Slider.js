import React, {useState, useEffect} from "react";
import data from "./data.json"

export default function Slider(){
    const [selectLanguage, setSelectLanguage] = useState("English")
    const [dataNew, setDataNew] = useState([])
    const languageClick = (e) =>{
        setSelectLanguage(e.target.value)
    }
    // useEffect(()=>{

    //     data.map((elem)=>{
    //         setDataNew(elem)
    //     })
    // }, [dataNew])
    // console.log(dataNew)
    
    return(
        <div>
            <select value={selectLanguage} onChange={languageClick}>
                <option value="English">English</option>
                <option value="Armenian">Armenian</option>
            </select>
            <div>
                {/* {data.map((elem)=>{

                   return elem[selectLanguage].map((item)=>{

                        return Object.keys(item).map((values)=>{
                            return <div>{values}</div>
                        })
                    })
                })} */}
                <div className="Category">
            {data.map((elem, index)=>{  
                return elem[selectLanguage].map((item)=>{
                    return <div className="card" id={item.id} key={index}>
                    <a><img src={item.img} id={item.id}></img></a>
                    <div className="cardProductNamePhones">
                        <h2>{`${item.model || item.Մոդել} ${item.memory}`}</h2>
                    </div>
                    <p>{`${item.price || item.Գին}AMD`}</p>
                    <button id={item.id}>{item.button}</button>
                </div>
                })
            })}
           </div>
                {/* {dataNew[selectLanguage].map((elem)=>{
                    return <div>{elem.model}</div>
                })} */}
             
            </div>
        </div>
    )
}