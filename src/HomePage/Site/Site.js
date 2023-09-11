import React, {useState} from "react";
import Profil from "../Profil/Profil";
import ProfilPage from "../ProfilPage/ProfilPage"
import Home from "../Home/Home"
import Settings from "../Settings/Settings"
import Messenger from "../Messenger/Messenger";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./site.scss"

export default function Site(){
    const [info, setInfo] = useState(JSON.parse(localStorage.getItem("user")))
    const [loginInfo, setLoginInfo] = useState(JSON.parse(localStorage.getItem("loginUser")))
    return(
        <main className="main">
<Profil></Profil>
            <BrowserRouter>
                <Routes>
                    <Route path="home" element={<Home info={info} setInfo={setInfo} loginInfo={loginInfo} setLoginInfo={setLoginInfo}></Home>}></Route>
                    <Route path='profil' element={<ProfilPage info={info} setInfo={setInfo} loginInfo={loginInfo} setLoginInfo={setLoginInfo}></ProfilPage>}></Route>
                    <Route path="settings" element={<Settings info={info} setInfo={setInfo} loginInfo={loginInfo} setLoginInfo={setLoginInfo}></Settings>}></Route>
                    <Route path="messenger" element={<Messenger info={info} setInfo={setInfo} loginInfo={loginInfo} setLoginInfo={setLoginInfo}></Messenger>}></Route>
                </Routes>
            </BrowserRouter>
            {/* <ProfilPage></ProfilPage> */}
        </main>
    )
}