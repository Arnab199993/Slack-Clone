import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Login.css"
import axios from "axios"
const Login = () => {

    const navigate = useNavigate()
    const [state, setState] = useState({
        email: "",
        pwd: ""
    })
    const HandleChange = ((e) => {
        const data = e.target.value;
        setState({ ...state, [e.target.name]: data })
    })
    console.log(state)

    const Click = ((e) => {
        e.preventDefault()
        const res = axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDZJmxfeSRvmYJo4VNzCCT39LdZ5Tru9c0", {
            email: state.email,
            password: state.pwd,
            returnSecureToken: true
        }
        ).then((data) => {
            console.log(data)
            navigate("/content")
        }).catch((err) => {
            console.log(err)
            alert(err.response.data.error.message)
        })
        console.log(res)
    })

    return (
        <div style={{ marginLeft: "40%", marginTop: "15%" }}>
            <h3 style={{ color: "#400080", marginLeft: "70px" }}>Login To Chatapp</h3>
            <div className='login' style={{ backgroundColor: "white", boxShadow: " 0px 15px 5px -15px #111" }}>
                <form>
                    <input name={"email"} value={state.name} onChange={HandleChange} style={{ width: "90%", height: "20px", marginTop: "10px", marginLeft: "10px" }} placeholder={"Email"} type={"email"} />
                    <input name={"pwd"} value={state.pwd} onChange={HandleChange} style={{ width: "90%", height: "20px", marginTop: "10px", marginLeft: "10px" }} placeholder={"Password"} type={"password"} />
                    <div>
                        <button onClick={Click} style={{ width: "93%", height: "40px", marginTop: "10px", backgroundColor: "#400080", color: "white", marginLeft: "10px", border: "none", padding: "0", borderRadius: "5px", cursor: "pointer" }}>Login</button>
                    </div>
                </form>
            </div>
            <div className={"Login-as-member"} style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "15px", backgroundColor: "white", boxShadow: " 0px 15px 5px -15px #111" }}>
                <p >Don't have an account?</p>
                <p onClick={(() => navigate("/register"))} style={{ cursor: "pointer", color: "blue", }}>SignUp</p>
            </div>
        </div>
    )
}

export default Login