import React, {useState, useEffect, useRef} from "react";
import Form from "../Form/Form";
import Login from "../Login/Login";
import ForgatP from "../ForgatP/ForgatP";
import Register from "../Register/Register";
import "./function.scss"


if(!localStorage.getItem("id")){
    localStorage.setItem("id", 1)
}

if(!localStorage.getItem("user")){
    localStorage.setItem("user", JSON.stringify([]))
}
export default function Function (){
    const [login, setLogin] = useState({loginTrue:false})
    const [loginF, setLoginF] = useState({loginFalse:false})
    const [log, setLog] = useState(true)
    const [register, setRegister] = useState(JSON.parse(localStorage.getItem("user")))
    const [open, setOpen] = useState({openTwo:false})
    const [forgatOpen, setForgatOpen] = useState({forgatO:false})
    const [confirm, setConfirm] = useState()
    const [confirmOpen, setConfirmOpen] = useState({conf:false})
    const [newPassword, setNewPassword] = useState({newP:false})
    const [passwordModify, setPasswordModify] = useState({
        name: "",
        secondName: ""
    })
    const [snakeBar, setSnakeBar] = useState(false)
    const [eror, setEror] = useState({})
    const [erorLogin, setErorLogin] = useState({})
    const loginRef = useRef()
    const passwordRef = useRef()
    const confirmRef = useRef()
    const [passwordEye, setPasswordEye] = useState("password")
    const [passwordRegEye, setPasswordRegEye] = useState("password")
    const [valid, setValid] = useState("")

    const registerClick =(e)=>{
        e.preventDefault()
        const strLength = /(?=.{6,})/
        const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\.])/
        const newArr = Array.from(new FormData(e.target))
        const arrRegister=[{
            id: localStorage.getItem("id"),
            fullName: newArr[0][1],
            email: newArr[1][1],
            phoneNumber: newArr[2][1],
            birthDate: newArr[3][1],
            password: newArr[4][1],
            resetPassword: newArr[5][1]
        }]
       
        console.log(register)
        
        // if(newArr[5][1] === newArr[4][1]){
        //     console.log("apres")
        // }
        // else{
        //     console.log("vates ara")
        // }
        
        // setEror(registerRequired)
        
        if(newArr[0][1] != "" && newArr[1][1] != "" && newArr[2][1] != "" && newArr[3][1] != "" && newArr[4][1] != "" && newArr[5][1] != ""){
            setSnakeBar(true)
            localStorage.setItem("id", +localStorage.getItem("id")+1) 

            localStorage.setItem("user", JSON.stringify([...JSON.parse(localStorage.getItem("user")),...arrRegister]))
            setRegister(JSON.parse(localStorage.getItem("user")))
        }
        else{
            setSnakeBar(false)
        }

       

        if(newArr[0][1] === ""){
            eror.name = "Enter your full name"
        }
        else{
            eror.name = ""
        }
        if(newArr[1][1] === ""){
            eror.email = "Enter a valid email address"
        }
        else{
            eror.email = ""
        }
        if(newArr[2][1].phoneNumber === ""){
            eror.phoneNumber = "Enter your phone number"
        }
        else{
            eror.phoneNumber = ""
        }
        if(newArr[3][1] === ""){
            eror.birthDate = "Select your date of birth"
        }
        else{
            eror.birthDate = ""
        }
        // if(newArr[4][1] === ""){
        //     eror.password = "Enter your password"
        // }
        // else{
        //     eror.password = ""
        // }
        if(newArr[5][1] === ""){
            eror.resetPassword = "Reset password"
        }else if(newArr[5][1] !== newArr[4][1]){
            eror.resetPassword = "chi Hamapatasxanum"
        }
        else{
            eror.resetPassword = ""
        }
        // if(!strLength.test(valid)){
        //     eror.password = "Password must contain 6 or more characters"
        // }
        if(newArr[4][1] === ""){
            eror.password = "Enter your password"
        }
        else if(!strLength.test(valid)){
            eror.password = "Password must contain 6 or more characters"
        }
        else if(!validPassword.test(valid)){
            eror.password = "Password must contain uppercase, lowercase, letter and number"
        }
        else{
            eror.password = ""
        }
    }

    const passwordChange = (e) =>{
        setValid(e.target.value)
    }


    const loginClick = (e)=>{
        e.preventDefault()
        const loginArr = Array.from(new FormData(e.target))
        console.log(loginRef.current)
        register.map((elem)=>{
            if(loginArr[0][1] === elem.email){
                setLogin({loginTrue:true})
                setLoginF({loginFalse:false})
            }
            else if(loginArr[0][1] != elem.email){
                setLoginF({loginFalse:true})
                setLogin({loginTrue:false})
            }
           if(loginArr[0][1] === ""){
                setLogin({loginTrue:false})
                setLoginF({loginFalse:false})
                erorLogin.login = "Enter your Login"
            }
            else{
                erorLogin.login = ""
            }
            if(loginArr[1][1] === elem.password){
                setLogin({loginTrue:true})
                setLoginF({loginFalse:false})
            }
            if(loginArr[1][1] === ""){
                setLogin({loginTrue:false})
                setLoginF({loginFalse:false})
                erorLogin.password = "Enter your password" 
            }
            else{
                erorLogin.password= ""     
            }
            if(loginArr[0][1] != elem.email && loginArr[1][1] != elem.password){
                setLogin({loginTrue:false})
                setLoginF({loginFalse:true})
            }
            else if(loginArr[0][1] != elem.email && loginArr[1][1] === elem.password || loginArr[0][1] === elem.email && loginArr[1][1] != elem.password){
                setLogin({loginTrue:false})
                setLoginF({loginFalse:true})
            }
            if(loginArr[0][1] === "" && loginArr[1][1] === "" || loginArr[0][1] === "" && loginArr[1][1] != "" || loginArr[0][1] != "" && loginArr[1][1] === ""){
                setLogin({loginTrue:false})
                setLoginF({loginFalse:false})
            }
            else if(loginArr[0][1] != "" && loginArr[1][1] != ""){
                loginRef.current.value = ""
                passwordRef.current.value = ""
            }
        })
    }

    
    const registerOpenClick = ()=>{
        setOpen({openTwo:true})
    }
    const registerCloseClick = ()=>{
        setOpen(!open)
    }

    const forgatPasswordOpen =(e)=>{
        setForgatOpen({forgatO:true})
        setLog(false)
    }

    const forgatPassword =(e)=>{
        e.preventDefault()
        const forgatArr = Array.from(new FormData(e.target))
        register.map((elem)=>{
            if(forgatArr[0][1] == elem.phoneNumber){
                console.log("Armenia")
                setConfirmOpen({conf:true})
                setConfirm(elem.email)
            }
            else{
                console.log("Monxol")
            }
        })
    }

    const okClick = ()=>{
        setForgatOpen(!forgatOpen)
        setConfirmOpen(!confirm)
        setNewPassword({newP:true})
    }

    const confirmClick = (e)=>{
        e.preventDefault()
        const resetArr = []
        const confirmArr = Array.from(new FormData(e.target))
        console.log(confirmArr[0][1])
        if(confirmArr[0][1] === "" && confirmArr[1][1] != ""){
            passwordModify.name = "Is not filled"
        }else if(confirmArr[0][1] != ""){
            passwordModify.name = ""
        }
        if(confirmArr[1][1] === "" && confirmArr[0][1] != ""){
            passwordModify.secondName = "Is not filled"
        }else if(confirmArr[1][1] != ""){
            passwordModify.secondName = ""
        }
        if(confirmArr[0][1] != "" && confirmArr[1][1] != "" && confirmArr[1][1] == confirmArr[0][1]){
            setNewPassword(!newPassword)
            setLog(true)
            register.map((elem)=>{
                elem.password = confirmArr[0][1]
                resetArr.push(elem)
            })
            localStorage.setItem("user", JSON.stringify(resetArr))
            setRegister(JSON.parse(localStorage.getItem("user")))
        }else if(confirmArr[1][1] != confirmArr[0][1]){
            passwordModify.secondName = "chi hamapatasxanum" 
        }
        
    }

    
    

    return(
        <div className="headForm">
            <Form  passwordEye={passwordEye} setPasswordEye={setPasswordEye} loginRef = {loginRef} passwordRef = {passwordRef} erorLogin = {erorLogin} loginClick={loginClick} openClick={registerOpenClick} forgatPasswordOpen={forgatPasswordOpen} log={log}></Form>
            <Login loginTrue={login.loginTrue} loginFalse={loginF.loginFalse} setLoginF={setLoginF} setLogin={setLogin}></Login>
            <ForgatP confirmRef={confirmRef} forgatPassword={forgatPassword} confirm={confirm} conf={confirmOpen.conf} okClick={okClick} newPassword={newPassword.newP} setConfirmOpen={setConfirmOpen} confirmClick={confirmClick} forgatOpen={forgatOpen.forgatO} passwordModify={passwordModify}></ForgatP>
            <Register passwordChange={passwordChange} valid={valid} passwordEye={passwordEye} setPasswordEye={setPasswordEye} passwordRegEye={passwordRegEye} setPasswordRegEye={setPasswordRegEye} registerClick={registerClick} open={open.openTwo}  registerCloseClick={registerCloseClick} snakeBar={snakeBar} eror={eror}></Register>
        </div>
    )
}