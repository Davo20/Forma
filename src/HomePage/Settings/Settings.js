import React, {useState, useEffect} from "react";
import {MdManageAccounts, MdLock, MdNightlight, MdWbSunny} from "react-icons/md"
import {FaBrush} from "react-icons/fa"
import Country from "./Country.json"
import "./settings.scss"

export default function Settings ({info, setInfo, loginInfo, setLoginInfo}){
    const [setting, setSetting] = useState(false)
    const [countryData, setCountryData] = useState(Country)
    const [selectValue, setSelectValue] = useState()
    const resultTheme = JSON.parse(localStorage.getItem("theme"))
    const [dark, setDark] = useState(resultTheme)
    const [theme, setTheme] = useState(false)
    const accSetClick = (e)=>{
        e.preventDefault()
        const settingArr = []
        const array = Array.from(new FormData(e.target))
        console.log(selectValue)
        info.map((elem)=>{
            if(loginInfo.id === elem.id){
                // elem.userName = array[1][1]
                if(array[0][1] !== ""){
                    elem.fullName = array[0][1]
                }
                if(array[1][1] !== ""){
                    elem.userName = array[1][1]
                }
                if(array[2][1] !== ""){
                    elem.email = array[2][1]
                }
                if(selectValue !== "Select Country"){
                    elem.addres = selectValue
                }
                if(array[3][1] !== ""){
                    elem.location = array[3][1]
                }
                if(array[4][1] !== ""){
                    elem.phoneNumber = array[4][1]
                }
            }
            settingArr.push(elem)
            localStorage.setItem("user", JSON.stringify(settingArr))
            setInfo(JSON.parse(localStorage.getItem("user")))

        })
    }
    
    useEffect(()=>{
        localStorage.setItem("theme", JSON.stringify(dark))
    }, [dark])
    
    return(
        <section className={"settingsSection " + (dark && "night")}>
            <div className="settingsMain">
                <div className={"selectSetting " + (dark && "night")}>
                    <ul>
                        <li>
                            <div>
                                <MdManageAccounts></MdManageAccounts>
                            </div>
                            <div>
                                <a onClick={()=>setSetting(false)}>Account</a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <MdLock></MdLock>
                            </div>
                            <div>
                                <a onClick={()=>setSetting(true)}>Password</a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <FaBrush></FaBrush>
                            </div>
                            <div>
                                <span onClick={()=>setTheme(true)}>Theme</span>
                            </div>
                            {theme && <ul className={"theme " + (dark && "themeN")}>
                                <li>
                                    <div>
                                        <div></div>
                                        <MdWbSunny className="sun" onClick={()=>setDark(false)}></MdWbSunny>
                                        <MdNightlight className="dark" onClick={()=>setDark(true)}></MdNightlight>
                                    </div>
                                </li>
                            </ul>}
                        </li>
                    </ul>
                </div>
                {!setting ? <div className={"accSec "  + (dark && "accSecNight")}>
                    <h2>Account Settings</h2>
                    <form action="#" onSubmit={accSetClick}>
                        <div className="formFlex">
                            <div>
                                <label>Fullname</label>
                                <input type="text" name="fullname"></input>
                                <label>Username</label>
                                <input type="text" name="username"></input>
                                <label>Email</label>
                                <input type="email" name="email"></input>
                            </div>
                            <div>
                                <label>Addres</label>
                                <select value={selectValue} onChange={(e)=>setSelectValue(e.target.value)}>
                                    <option>Select Country</option>
                                    {countryData.map((elem, index)=>{
                                        return <option key={index} value={elem.country}>{elem.country}</option>
                                    })}
                                </select>
                                <label>Location</label>
                                <input type="text" name="location"></input>
                                <label>Phone</label>
                                <input type="tel" name="phone"></input>
                            </div>
                        </div>
                        <button type="submit">Save</button>
                    </form>
                </div>:
                <div className={"accSec "  + (dark && "accSecNight")}>
                    <form>
                        <div className="formFlex">
                            <div>
                        <label>New Password</label>
                        <input type="password" name="password"></input>
                        <label>Reset Password</label>
                        <input type="password" name="resetPassword"></input>
                        <button type="submit">Save</button>
                            </div>
                        </div>
                    </form>
                </div>}
            </div>
        </section>
    )
}