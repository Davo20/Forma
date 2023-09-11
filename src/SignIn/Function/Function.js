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
    const [loginF, setLoginF] = useState({loginFalse:false})
    const [log, setLog] = useState(true)
    const [register, setRegister] = useState(JSON.parse(localStorage.getItem("user")))
    const registerValue = {
        fullName: "",
        email: "",
        phoneNumber: "",
        birthDate: "",
        password: "", 
        resetPassword: "",
        userName: ""
    }
    const [formRegisterValues, setRegisterForm] = useState(registerValue)
    const [registerErrors, setRegisterErrors] = useState({})
    const [open, setOpen] = useState({openTwo:false})
    const [forgatOpen, setForgatOpen] = useState({forgatO:false})
    const [confirm, setConfirm] = useState()
    const [confirmOpen, setConfirmOpen] = useState({conf:false})
    const [newPassword, setNewPassword] = useState({newP:false})
    const newPasswordValues = {
        phoneNumber: "",
        password: "", 
        resetPassword: ""
    }
    const [formValues, setForm] = useState(newPasswordValues)
    const [newPasswordErrors, setNewPasswordErrors] = useState({})
    const [errorOpen, setErrorOpen] = useState(false)
    const [snakeBar, setSnakeBar] = useState(false)
    const [eror, setEror] = useState({})
    const [erorLogin, setErorLogin] = useState({})
    const loginValue = {
        email: "",
        password: "",
        errorInput: "",
    }
    const [loginFormValue, setLogFormValue] = useState(loginValue)
    const [loginFormError, setLogFormError] = useState({})
    const loginRef = useRef()
    const passwordRef = useRef()
    const confirmRef = useRef()
    const [passwordEye, setPasswordEye] = useState("password")
    const [passwordRegEye, setPasswordRegEye] = useState("password")
    const [pNewEye, setPNewEye] = useState("password")
    const [pNewRegEye, setNewPEye] = useState("password")
    const [user, setUser] = useState(false)
    const [loader, setLoader] = useState(false)

    const registerChange = (e) =>{
        const {name, value}=e.target
        setRegisterForm({...formRegisterValues, [name]: value})
    }

    const registerClick = (e)=>{
        e.preventDefault()
        setRegisterErrors(registerValidate(formRegisterValues))
        setErrorOpen(true)
    }

    const registerValidate = (values)=>{
        const errors = {}
        const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\.])/
        const strLength = /(?=.{6,})/
        const emailValid = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/
        const arrRegister=[{
            id: localStorage.getItem("id"),
            fullName: values.fullName,
            email: values.email,
            phoneNumber: values.phoneNumber,
            birthDate: values.birthDate,
            password: values.password,
            resetPassword: values.resetPassword
        }]

        
        if(values.fullName === ""){
            errors.fullName = "Enter your full name"
        }
        if(values.email === ""){
            errors.email = "Enter a valid email address"
        }
        else if(!emailValid.test(values.email)){
            errors.email = "chisht lracreq"
        }
        if(values.phoneNumber === ""){
            errors.phoneNumber = "Enter your phone number"
        }
        if(values.birthDate === ""){
            errors.birthDate = "Select your date of birth"
        }
        if(values.password === ""){
            errors.password = "Enter your password"
        }else if(!validPassword.test(values.password)){
            errors.password = "Password must contain uppercase, lowercase, letter and number"
        }
        else if(!strLength.test(values.password)){
            errors.password = "Password must contain 6 or more characters"
        }
        const arr = []
        register.map((elem)=>{
            arr.push(elem.password)
            if(values.password === elem.password){
                errors.password = "The specified password already exists"
            }
        })
        if(values.resetPassword === ""){
            errors.resetPassword = "Reset Password"
        }else if(values.resetPassword != values.password){
            errors.resetPassword = "Not filled in correctly"
        }

            if(values.fullName != "" && values.email != "" && values.phoneNumber != "" && values.birthDate != "" && values.password != "" && values.resetPassword != "" && validPassword.test(values.password) && strLength.test(values.password) && emailValid.test(values.email) && values.resetPassword === values.password){
                setLoader(true)
                setTimeout(()=>{
                    setLoader(false)
                    
                    setOpen(!open)
                    localStorage.setItem("id", +localStorage.getItem("id")+1) 
                    
                    localStorage.setItem("user", JSON.stringify([...JSON.parse(localStorage.getItem("user")),...arrRegister]))
                    setRegister(JSON.parse(localStorage.getItem("user")))
                }, 3000)
            }
            // else{
            //     setSnakeBar(false)
            // }
           
        return errors
    }

    const loginChange = (e)=>{
        const {name, value}=e.target
        setLogFormValue({...loginFormValue, [name]: value})
    }

    const loginClick = (e)=>{
        e.preventDefault()
        setLogFormError(loginValidate(loginFormValue))
        setErrorOpen(true)
    }

    const loginValidate = (values) =>{
        const errors = {}


        const obj = {
            logEmail: values.email,
            logPassword: values.password
        }
        register.map((elem)=>{
        if(values.email === ""){
            errors.email = "Enter your Login"
        }else if(values.email !== elem.email){
            errors.email = "sxal email"
        }
        if(values.password === ""){
            errors.password = "Enter your password"
        }else if(values.password !== elem.password){
            errors.password = "sxal password"
        }
        if(values.email != "" && values.password != ""){
            loginRef.current.value = ""
            passwordRef.current.value = ""
            setUser(true)
        }
        register.map((elem)=>{

            if(values.email === elem.email && values.password === elem.password){
                obj.id = elem.id
                localStorage.setItem("loginUser", JSON.stringify(obj))
            }
        })
            
        })
        return errors
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

    const handleChange = (e) =>{
        const {name, value}=e.target
        setForm({...formValues, [name]: value})
    }

    const confirmClick = (e)=>{
        e.preventDefault()
        setNewPasswordErrors(validate(formValues))
        setErrorOpen(true)
    }
    const validate = (values)=>{
        const errors = {}
        const resetArr = []
        
        if(values.password === ""){
            errors.password = "invalid password"
        }
        register.map((elem)=>{
            if(elem.password.includes(values.password)){
                errors.password = "arden ka"
            }
        })
        if(values.resetPassword === ""){
            errors.resetPassword = "invalid resetPassword"
        }
       

        
        if(values.password != "" && values.resetPassword != "" && values.resetPassword == values.password){
                    setNewPassword(!newPassword)
                    setLog(true)
                    register.map((elem)=>{
                        elem.password = values.password
                        resetArr.push(elem)
                    })
                    localStorage.setItem("user", JSON.stringify(resetArr))
                    setRegister(JSON.parse(localStorage.getItem("user")))
                }else if(values.resetPassword != values.password){
                    errors.resetPassword = "chi hamapatasxanum" 
                }
            
        return errors
    }
    return(
        <div className="headForm" id="headForm">
            <Form  passwordEye={passwordEye} setPasswordEye={setPasswordEye} loginRef = {loginRef} passwordRef = {passwordRef} erorLogin = {erorLogin} loginClick={loginClick} openClick={registerOpenClick} forgatPasswordOpen={forgatPasswordOpen} log={log} loginChange={loginChange} loginFormValueE={loginFormValue.email} loginFormValueP = {loginFormValue.password} loginFormErrorE={loginFormError.email} loginFormErrorP = {loginFormError.password} loginFormErrorEr = {loginFormError.errorInput}></Form>
            <Login  loginFalse={loginF.loginFalse} setLoginF={setLoginF} ></Login>
            <ForgatP pNewEye={pNewEye} pNewRegEye={pNewRegEye} setPNewEye={setPNewEye} setNewPEye={setNewPEye} confirmRef={confirmRef} forgatPassword={forgatPassword} confirm={confirm} conf={confirmOpen.conf} okClick={okClick} newPassword={newPassword.newP} setConfirmOpen={setConfirmOpen} confirmClick={confirmClick} forgatOpen={forgatOpen.forgatO} handleChange={handleChange} formValuesP = {formValues.password} formValuesPR = {formValues.resetPassword} newPasswordErrorsP={newPasswordErrors.password} newPasswordErrorsR = {newPasswordErrors.resetPassword}></ForgatP>
            <Register setSnakeBar={setSnakeBar} loader={loader}  passwordEye={passwordEye} setPasswordEye={setPasswordEye} passwordRegEye={passwordRegEye} setPasswordRegEye={setPasswordRegEye} registerClick={registerClick} open={open.openTwo}  registerCloseClick={registerCloseClick} snakeBar={snakeBar} eror={eror} registerChange={registerChange} formRegisterValuesN = {formRegisterValues.fullName} formRegisterValuesE = {formRegisterValues.email} formRegisterValuesPN = {formRegisterValues.phoneNumber} formRegisterValuesB = {formRegisterValues.birthDate} formRegisterValuesP = {formRegisterValues.password} formRegisterValuesRP = {formRegisterValues.resetPassword} registerErrorsN = {registerErrors.fullName} registerErrorsE = {registerErrors.email} registerErrorsPN = {registerErrors.phoneNumber} registerErrorsB = {registerErrors.birthDate} registerErrorsP = {registerErrors.password} registerErrorsRP = {registerErrors.resetPassword}></Register>
        </div>
    )
}