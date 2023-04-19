import React, { useEffect, useState } from 'react'
import Body from '../Body/Body'
import LittleSidebar from '../LittleSidebar/LittleSidebar'
// import Message from '../Message/Message'
// import MetaData from '../MetaData/MetaData'
import Sidebar from '../Sidebar/Sidebar'
import './content.css'
const Content = () => {
    const [loading, setloading] = useState(false)
    useEffect(() => {
        setloading(true)
        setTimeout(() => {
            setloading(false)
        }, 2000)
    }, [])
    return (
        <div className='content'>
            {loading ? (<div style={{ marginLeft: "800px", marginTop: "400px" }}>Loading..</div>) : <LittleSidebar />}
            {loading ? "" : <Sidebar />}
            {loading ? "" : <p style={{ marginLeft: "500px", marginTop: "300px", fontSize: "50px" }}>Welcome To Slack</p>}
            {/* {loading ? "" : <Body />} */}
        </div>
    )
}

export default Content