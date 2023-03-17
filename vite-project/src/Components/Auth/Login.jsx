import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Login.css"
const Login = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h3 style={{ color: "#400080" }}>Login To Chatapp</h3>
            <div className='login' style={{ backgroundColor: "white", boxShadow: " 0px 15px 5px -15px #111" }}>
                <form>
                    <input style={{ width: "90%", height: "20px", marginTop: "10px" }} placeholder={"Email"} type={"email"} />
                    <input style={{ width: "90%", height: "20px", marginTop: "10px" }} placeholder={"Password"} type={"password"} />
                    <div>
                        <button style={{ width: "95%", height: "40px", marginTop: "10px", backgroundColor: "#400080", color: "white" }}>Login</button>
                    </div>
                </form>
            </div>
            <div className={"Login-as-member"} style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "15px", backgroundColor: "white", boxShadow: " 0px 15px 5px -15px #111" }}>
                <p >Don't have an account?</p>
                <p onClick={(() => navigate("/"))} style={{ cursor: "pointer", color: "blue" }}>Login</p>
            </div>
        </div>
    )
}

export default Login