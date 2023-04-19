import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Register.css"
import axios from "axios"
const Register = () => {
    const Navigate = useNavigate()
    const [passwords, setpasswords] = useState("")
    const [recpassword, setrecpassword] = useState("")
    const error = "Password will be the same"
    const [state, setState] = useState({
        username: "",
        email: "",
        input: ""
    })
    const Change = ((event) => {
        const data = event.target.value
        setState({ ...state, [event.target.name]: data })
    })
    console.log(state)



    const Click = ((event) => {
        event.preventDefault()
        axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDZJmxfeSRvmYJo4VNzCCT39LdZ5Tru9c0",
            {
                email: state.email,
                password: state.input,
                returnSecureToken: true
            }
        ).then((data) => {
            console.log(data)
            Navigate("/login")
        }).catch((error) => {
            console.log(error)
            alert((error.response.data.error.message))
        })
    })
    const pwd = ((event) => {
        setpasswords(event.target.value)
        const data = event.target.value
        setState({ ...state, [event.target.name]: data })
        console.log(state)
    })
    const pwd2 = ((event) => {
        setrecpassword(event.target.value)
        const data = event.target.value
        setState({ ...state, [event.target.name]: data })
        console.log(state)
    })
    return (
        <div style={{ marginLeft: "40%", marginTop: "15%" }}>
            <h3 style={{ color: "#FF7518", marginLeft: "65px" }}>Register For Chatapp</h3>
            <div className='reg' style={{ backgroundColor: "white", borderRadius: "5px", boxShadow: " 0px 15px 5px -15px #111", }}>
                <form >
                    <input value={state.username} onChange={Change} name={"username"} required style={{ width: "90%", height: "20px", marginTop: "10px", marginLeft: "10px" }} placeholder={"User name"} type={"text"} />
                    <input value={state.email} onChange={Change} name={"email"} required style={{ width: "90%", height: "20px", marginTop: "10px", marginLeft: "10px" }} placeholder={"Email"} type={"email"} />
                    <input value={state.input} name={"input"} onChange={pwd} style={{ width: "90%", height: "20px", marginTop: "10px", marginLeft: "10px" }} placeholder={"Password"} type={"password"} />
                    <input name={"input"} onChange={pwd2} style={{ width: "90%", height: "20px", marginTop: "10px", marginLeft: "10px" }} placeholder={"Confirm new password"} type={"password"} />
                    {passwords === recpassword ? "" : error}
                    <div>
                        <button onClick={Click} style={{ width: "93%", height: "40px", marginTop: "10px", backgroundColor: "#FF7518", color: "white", marginLeft: "10px", border: "none", padding: "0", borderRadius: "5px", cursor: "pointer" }}>Submit It</button>
                    </div>
                </form>
            </div>
            <div className='member' style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "15px", backgroundColor: "white", boxShadow: " 0px 15px 5px -15px #111" }}>
                <p>Already a member?</p>
                <p style={{ cursor: "pointer", color: "blue" }} onClick={() => Navigate("/login")}>Login</p>
            </div>
        </div>
    )
}

export default Register