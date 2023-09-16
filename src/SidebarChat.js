import React, { useEffect, useState } from 'react';
import './SidebarChat.css' 
import { Avatar } from '@mui/material';

function SidebarChat({ addNewChat }) {
    const[seed, setSeed] = useState("");

    useEffect(()=>{
        setSeed(Math.floor(Math.random() * 5000))
    }, []);

    const createChat = () => {
        const roomName = prompt("Please enter name for chat");

        if(roomName) {
            // do some clever database stuff...
            
        }
    };

  return !addNewChat ?(
    <div className='sidebarChat'>
        <Avatar src={`https://api.dicebear.com/7.x/notionists/svg?seed=${seed}`}/>
        <div className="sidebarChat_info">
            <h2>Room name</h2>
            <p> Last message...</p>
        </div>
    </div>
  ):(
    <div onClick={createChat}
    className='sidebarChat'>
        <h2> Add new chat </h2>
    </div>
  );
}

export default SidebarChat