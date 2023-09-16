import React from 'react'
import "./Chat.css"
import { Avatar } from '@mui/material'

function Chat() {
  return (
    <div className='chat'>
        <div className="chat_headder">
            <Avatar/>
        </div>
        <div className="chat_body"></div>
        <div className="chat_footer"></div>
    </div>
  )
}

export default Chat