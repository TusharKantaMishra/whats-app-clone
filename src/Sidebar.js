import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import { Avatar, IconButton } from '@mui/material'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { SearchOutlined } from '@mui/icons-material';
import SidebarChat from './SidebarChat';
import db from './firebase';

function Sidebar() {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        db.collection("rooms").onSnapshot((snapshot) => 
            setRooms(
                snapshot.docs.map((doc)=>
                ({
                    id: doc.id,
                    data: doc.data()
                }))
            )    
        );
    }, [])

  return (
    <div className = "sidebar">
        <div className="sidebar_headder">
            <Avatar/>
            <div className="sidebar_headderRight">
                <IconButton>
                    <DonutLargeIcon/>
                </IconButton>
                <IconButton>
                    <ChatIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>
        </div>
        <div className="sidebar_search">
            <div className="sidebar_searchContainer">
                <SearchOutlined/>
                <input placeholder="Search or start new chat" type="text"/>
            </div>
        </div>
        <div className="sidebar_chats">
            <SidebarChat addNewChat/>
            {rooms.map((room)=>{
                <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
            })}
        </div>
    </div>
  );
}

export default Sidebar