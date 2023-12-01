import React, {useState, useRef} from "react";
import {TbSearch} from "react-icons/tb"
import {CgCloseO} from "react-icons/cg"
import "./search.scss"

export default function Search ({info, searchOpen, setSearchOpen, loginInfo, language}){
    const [searchProfil, setSearchProfil] = useState("")
    const [delet, setDelete] = useState(false)
    // const [searchOpen, setSearchOpen] = useState(false)
    const inputValue = useRef();
    const searchChange = (e)=>{
        setSearchProfil(e.target.value)
    }
    const deletClick = (e)=>{
        setDelete(false)
        inputValue.current.value = ""
    }
    
    return(
        <div className={"searchMenu " + (searchOpen && "searchMenuTrue")}>
            <div className="searchContainer">
                <div className="searchInput">
                    {language.map((elem)=>{
                        return <div>
                     {elem.id != 1 ? <h2>{elem.langSearch}</h2>:null}
                     </div>
                    })}
                    {!delet ? <label className="searchIcon"><TbSearch></TbSearch></label> : <label className="delete"><CgCloseO onClick={deletClick}></CgCloseO></label>}
                    <input type="text" name="search" ref={inputValue} onChange={searchChange} onClick={()=>setDelete(true)}></input>
                </div>
                <div className="searchTable">
                    <ul>{info.filter(user=>user.fullName.toLowerCase().includes(searchProfil)).map((elem)=>{
                         return <div key={elem.id} className="searchItem">
                            <img src={elem.image}></img>
                             <li>{elem.fullName}</li>
                         </div>
                    })}
                    </ul>
                </div>
            </div>
        </div>
    )
}