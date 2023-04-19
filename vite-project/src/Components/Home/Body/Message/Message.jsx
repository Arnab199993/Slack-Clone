import React, { useState } from 'react'
import "./Message.css"
const Message = () => {
    const [message, setmessage] = useState([])
    const [content, setcontent] = useState("")
    const Click = (() => {
        message.push(content)
        setmessage([...message])
        console.log(message)

    })
    const Change = ((e) => {
        setcontent(e.target.value)
    })
    const AllChannels = JSON.parse(localStorage.getItem("All Channels")) || []
    return (
        <div className='message-section'>
            <div>
                <label style={{ position: "fixed" }}>Message</label>
                <label style={{ position: "fixed" }} className='metaData-section'>MetaData</label>
                <input onChange={Change} style={{ marginTop: "650px", height: "50px", width: "900px", paddingLeft: "30px", fontSize: "18px" }} type='text' />
                <button onClick={Click} style={{ height: "55px", marginLeft: "10px", cursor: "pointer", width: "150px" }}>Click</button>
            </div>
            <div>
                {message.map((ele, i) => {
                    return <li style={{ color: "black" }} key={i}>{ele}</li>
                })}
            </div>
        </div>
    )
}

export default Message