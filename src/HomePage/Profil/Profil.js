import React, {useState} from "react";
import {CgProfile} from "react-icons/cg";
import {PiMessengerLogoBold} from "react-icons/pi";
import {MdClose, MdMenu, MdOutlineHome, MdSettings, MdOutlineKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft, MdOutlineExitToApp} from "react-icons/md";
import {TbUserSearch} from "react-icons/tb"
import {RiHomeLine} from "react-icons/ri"
import {AiOutlineUser} from "react-icons/ai"
import { Link } from "react-router-dom";
import "./profil.scss"
import ProfilPage from "../Home/Home";

export default function Profil({searchOpen, setSearchOpen}){
    const [sideBar, setSideBar] = useState(false)
    const [more, setMore] = useState(false)
    
    return(
    <div>
                <div id ="page" className="page">
                    <nav className={sideBar && "sideBar"}>
                        <ul>
                            <div>
                                <li>
                                    <div>
                                        <a href="profil">
                                            <CgProfile></CgProfile>
                                        </a>
                                    </div>
                                    <div>
                                        {sideBar && <a href="profil">Profil</a>}
                                    </div>
                                </li>
                            </div>
                            <div>
                                <li>
                                    
                                    <div>
                                        <a href="/home">
                                            <MdOutlineHome></MdOutlineHome>
                                        </a>
                                    </div>
                                    <div>
                                        {sideBar && <a href="home">Home</a>}
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        {!searchOpen ? <TbUserSearch onClick={()=>setSearchOpen(true)}></TbUserSearch> : <TbUserSearch className="searchActive" onClick={()=>setSearchOpen(false)}></TbUserSearch>}
                                    </div>
                                    <div>
                                        {sideBar && <span>Search</span>}
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <a href="messenger">
                                            <PiMessengerLogoBold></PiMessengerLogoBold>
                                        </a>
                                    </div>
                                    <div>
                                        {sideBar && <a href="messenger">Messenger</a>}
                                    </div>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <div>
                                        <MdOutlineExitToApp onClick={()=>localStorage.removeItem("loginUser")}></MdOutlineExitToApp>
                                    </div>
                                    <div>
                                        {sideBar && <span>Exit</span>}
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <a href="settings">
                                            <MdSettings></MdSettings>
                                        </a>                                     
                                    </div>
                                    <div>
                                        {sideBar && <a href="settings">Settings</a>}
                                    </div>
                                </li>
                            </div>
                        </ul>
                        <div className="arrow">
                            {sideBar ? <MdKeyboardDoubleArrowLeft onClick={()=>setSideBar(false)}></MdKeyboardDoubleArrowLeft> :
                             <MdOutlineKeyboardDoubleArrowRight onClick={()=>setSideBar(true)}></MdOutlineKeyboardDoubleArrowRight>}
                        </div>
                    </nav>
                    {/* <ProfilPage></ProfilPage> */}
                </div>
                <div className="mobileNavBar">
                    <nav>
                        <ul>
                            <li>
                                <a href="profil">
                                    <AiOutlineUser></AiOutlineUser>
                                </a>
                            </li>
                            <li>
                                <a href="home">
                                    <RiHomeLine></RiHomeLine>
                                </a>
                            </li>
                            <li>
                                <a href="messenger">
                                    <PiMessengerLogoBold></PiMessengerLogoBold>
                                </a>
                            </li>
                            <li>
                                {!more ? <MdMenu onClick={()=>setMore(true)}></MdMenu>:
                                <MdClose onClick={()=>setMore(false)}></MdClose>}
                                {more && <div>
                                    <ul>
                                        <li>
                                        {!searchOpen ? <TbUserSearch onClick={()=>setSearchOpen(true)}></TbUserSearch> : <TbUserSearch className="searchActive" onClick={()=>setSearchOpen(false)}></TbUserSearch>}
                                        </li>
                                        <li>
                                            <a href="settings">
                                                <MdSettings></MdSettings>
                                            </a>    
                                        </li>
                                        <li>
                                            <MdOutlineExitToApp onClick={()=>localStorage.removeItem("loginUser")}></MdOutlineExitToApp>
                                        </li>
                                    </ul>
                                </div>}
                            </li>
                        </ul>
                    </nav>
                </div>
                </div>
    )
}