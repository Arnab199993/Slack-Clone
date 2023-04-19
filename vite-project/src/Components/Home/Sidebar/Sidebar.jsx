import React, { useEffect, useState } from 'react'
import "./Sidebar.css"
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {
    const Navigate = useNavigate()
    const [channlename, setchannel] = useState("")
    const [about, setabout] = useState("")
    const [AllChannel, setAllchannel] = useState([])
    const Channel = (event) => {
        setchannel(event.target.value)
    }
    const aboutname = (event) => {
        setabout(event.target.value)
    }

    const [toggle, settoggle] = useState(false)
    const Click = (() => {
        settoggle(!toggle)
    })
    const AllChannels = JSON.parse(localStorage.getItem("All Channels")) || []

    AllChannels.push({
        name: channlename,
        about: about,
        index: 0,
    })

    const Clicks = () => {
        settoggle(!toggle)
        localStorage.setItem("All Channels", JSON.stringify(AllChannels))
        setAllchannel(AllChannels)
    }
    const DeleteItem = (index) => {
        AllChannel.splice(index, 1)
        // const newArr = []
        // for (let i = 0; i <= AllChannel.length - 1; i++) {
        //     newArr.push(AllChannel[i])
        // }
        // setAllchannel(AllChannel)
        setAllchannel([...AllChannel])
    }

    useEffect(() => {
        setAllchannel(AllChannels)
    }, [])


    return (
        <div className='main-sidebar'>
            <div>
                <div className='icon-with-name'>
                    <img className='image' src='data:image/jpeg;base64,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' />
                    <span className='Heading'>Crio Buzz</span>
                </div>
                <div className='Dropdown'>
                    <img className='Dummy' src='https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/crash_test_dummy.png' />
                    <label style={{ fontSize: "20px", color: "white", marginLeft: "10px", marginTop: "5px" }}>Crio 1</label><br></br>
                </div>
                <div >
                    <select style={{ marginLeft: "10px", height: "40px", width: "140px", marginTop: "10px", outline: "none", fontSize: "13px", cursor: "pointer" }}>
                        <option style={{ color: "grey" }}>Signed in as Crio 1</option>
                        <option >Change Avatar</option>
                        <option>Sign Out</option>
                    </select>
                </div>
                <div style={{ color: "#E5E4E2", marginTop: "20px", display: "flex" }}>
                    <img style={{ height: "30px", width: "30px", marginLeft: "10px" }} src='https://image.shutterstock.com/image-vector/transfer-arrows-outline-icon-linear-260nw-1371060434.jpg' />
                    <div style={{ display: "flex" }}>
                        <span className='channel'>Channels[1]<span onClick={Click} style={{ marginLeft: "20px", fontWeight: "bolder", fontSize: "20px", cursor: "pointer", }}>+</span></span>
                    </div>
                </div>

                <div style={{ fontWeight: "bolder", fontSize: "20px", }}>
                    {
                        <ul>
                            {AllChannel.map((ele, i) => (
                                <li className='List' key={i}><span onClick={(() => Navigate("/body"))}>#{ele.name}</span><button onClick={DeleteItem}>Delete</button></li>
                            ))}
                        </ul>
                    }
                </div>




                {toggle ? (<div style={{ marginTop: "20px", marginRight: "50px", }}>
                    <label style={{ marginLeft: "10px", color: "white" }}>Channel Name:</label>
                    <input onChange={Channel} style={{ marginLeft: "10px" }} />
                    <label style={{ marginLeft: "10px", color: "white" }}>About:</label>
                    <input onChange={aboutname} style={{ marginLeft: "10px" }} />
                    <div style={{ marginTop: "5px" }}>
                        <button onClick={Clicks} style={{ marginLeft: "78px", cursor: "pointer" }}>Add</button>
                        <button onClick={(() => settoggle(!toggle))} style={{ marginLeft: "10px", cursor: "pointer", }}>Cancel</button>
                    </div>
                </div>) : ""}
            </div>


        </div>
    )
}

export default Sidebar