import React, {useState} from "react";
import Profil from "../Profil/Profil";
import ProfilPage from "../ProfilPage/ProfilPage"
import Home from "../Home/Home"
import Settings from "../Settings/Settings"
import Messenger from "../Messenger/Messenger";
import Search from "../Search/Search";
import { BrowserRouter,Router, Routes, Route,Link } from "react-router-dom";
import "./site.scss"
import language from "./language.json"

export default function Site(){
    const [info, setInfo] = useState(JSON.parse(localStorage.getItem("user")))
    const [loginInfo, setLoginInfo] = useState(JSON.parse(localStorage.getItem("loginUser")))
    const [searchOpen, setSearchOpen] = useState(false)
    console.log(language)
    // const searchUser = ()=>{
        
    // }
    return(
        <main className="main">
<Profil searchOpen={searchOpen} setSearchOpen={setSearchOpen} language={language}></Profil>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Settings info={info} setInfo={setInfo} loginInfo={loginInfo} setLoginInfo={setLoginInfo} language={language}></Settings>}></Route>
                    <Route path="/home" element={<Home info={info} setInfo={setInfo} loginInfo={loginInfo} setLoginInfo={setLoginInfo} language={language}></Home>}></Route>
                    <Route path='/profil' element={<ProfilPage info={info} setInfo={setInfo} loginInfo={loginInfo} setLoginInfo={setLoginInfo} language={language}></ProfilPage>}></Route>
                    {/* <Route path="search" element={<Search info={info}></Search>}></Route> */}
                    <Route path="/settings" element={<Settings info={info} setInfo={setInfo} loginInfo={loginInfo} setLoginInfo={setLoginInfo} language={language}></Settings>}></Route>
                    <Route path="/messenger" element={<Messenger info={info} setInfo={setInfo} loginInfo={loginInfo} setLoginInfo={setLoginInfo} language={language}></Messenger>}></Route>
                </Routes>
            </BrowserRouter>
                    <Search info={info} searchOpen={searchOpen} setSearchOpen={setSearchOpen} loginInfo={loginInfo} language={language}></Search>
            {/* <ProfilPage></ProfilPage> */}
        </main>
    )
}