import React from 'react'
import "./Chat.css"
import { Avatar, IconButton } from '@mui/material'
import { useEffect, useState } from 'react';
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@mui/icons-material';

function Chat() {

    const[input, setInput] = useState("");
    const[seed, setSeed] = useState("");

    useEffect(()=>{
        setSeed(Math.floor(Math.random() * 5000))
    }, []);

    const sendMessage = (e) =>{
        e.preventDefault();
        console.log("You typed >>>", input);
        setInput("");
    };

  return (
    <div className='chat'>
        <div className="chat_headder">
            <Avatar src={`https://api.dicebear.com/7.x/notionists/svg?seed=${seed}`}/>
            <div className="chat_headderInfo">
                <h3>Room name</h3>
                <p>Last seen at ...</p>
            </div>
            <div className="chat_headderRight">
                <IconButton>
                    <SearchOutlined/>
                </IconButton>
                <IconButton>
                    <AttachFile/>
                </IconButton>
                <IconButton>
                    <MoreVert/>
                </IconButton>
            </div>
        </div>
        <div className="chat_body">
            <p className={`chat_message ${true && "chat_reciever"}`}>
                <span className='chat_name'>Tushar Mishra</span>
                Hey Guys
                <span className='chat_timestamp'>3.52pm</span>
            </p>
        </div>
        <div className="chat_footer">
            <InsertEmoticon/>
            <form>
                <input value={input} onChange={e => setInput(e.target.value)} placeholder='Type a message' type="text"/>
                <button onClick={sendMessage} type='submit'>Send</button>
            </form>
            <Mic/>
        </div>
    </div>
  )
}

export default Chat