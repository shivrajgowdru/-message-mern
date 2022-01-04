import { Avatar, IconButton } from '@material-ui/core'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';
import React, { useState } from 'react'
import "./Chat.css"
import axios from './axios'
function Chat({messages}) {

const [input,setInput] = useState([])

const sendMessage = async (e) => {
  e.preventDefault();

  axios.post("/messages/new",{
    "message":input,
     "name":"shiv",
    "timestamp":"{{currentdate}}",
    "received":false
  })

  setInput('');
}

  return (
    <div className="chat">
      <div className='chat__header'>
        <Avatar/>
        <div className='chat__headerInfo'>
            <h2>Room name</h2>
            <p>Last seen at ...</p>
        </div>
        <div className='chat__headerRight'>
          <IconButton>
            <SearchOutlinedIcon/>
          </IconButton>
          <IconButton>
            <AttachFileIcon/>
          </IconButton>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
        </div>
      </div>

<div className='chat__body'>
{messages.map((message) => (
  <p className={`chat__message ${message.received && 'chat__receiver'}`}>
  <span className="chat__name">{message.name} </span>
   {message.message}
    <span className='chat__timestamp'>
    {
      message.timestamp
    }
  </span>
 </p>
))}

</div>
  <div className="chat__footer">
    <TagFacesIcon/>
   <form>
     <input value={input}
      onChange={(e) => setInput(e.target.value)}
       placeholder='Type a message' 
       type='text'/>
     <button type="submit" onClick={sendMessage}>
          <SendIcon/>      
     </button>
   </form>
   <MicIcon/>
  </div>
    </div>
  )
}

export default Chat
