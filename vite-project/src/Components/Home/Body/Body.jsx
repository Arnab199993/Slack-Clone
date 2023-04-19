import React from 'react'
import Message from "./Message/Message"

import LittleSidebar from '../LittleSidebar/LittleSidebar'
import Sidebar from '../Sidebar/Sidebar'
const Body = () => {
    return (
        <div style={{ display: "flex" }}>
            <LittleSidebar />
            <Sidebar />
            <Message />
        </div>
    )
}

export default Body