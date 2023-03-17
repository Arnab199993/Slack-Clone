import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Register.css"
const Register = () => {
    const Navigate = useNavigate()
    const [password, setpassword] = useState("")
    const [recpassword, setrecpassword] = useState("")
    const error = "Password will be the same"
    const pwd = ((event) => {
        setpassword(event.target.value)
    })
    const pwd2 = ((event) => {
        setrecpassword(event.target.value)
    })

    return (
        <div>
            <h3 style={{ color: "#FF7518" }}>Register For Chatapp</h3>
            <div className='reg' style={{ backgroundColor: "white", borderRadius: "5px", boxShadow: " 0px 15px 5px -15px #111" }}>
                <form >
                    <input required style={{ width: "90%", height: "20px", marginTop: "10px" }} placeholder={"User name"} type={"text"} />
                    <input required style={{ width: "90%", height: "20px", marginTop: "10px" }} placeholder={"Email"} type={"email"} />
                    <input onChange={pwd} style={{ width: "90%", height: "20px", marginTop: "10px" }} placeholder={"Password"} type={"password"} />
                    <input onChange={pwd2} style={{ width: "90%", height: "20px", marginTop: "10px" }} placeholder={"Confirm new password"} type={"password"} />
                    {password === recpassword ? "" : error}
                    <div>
                        <button style={{ width: "95%", height: "40px", marginTop: "10px", backgroundColor: "#FF7518", color: "white" }}>Submit It</button>
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