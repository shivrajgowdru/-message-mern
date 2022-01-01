import { Avatar, IconButton } from '@material-ui/core'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';
import React from 'react'
import "./Chat.css"
function Chat() {
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
     <p className="chat__message">
       <span className="chat__name">Shiv </span>
         this is a  message
       <span className='chat__timestamp'>
         {
           new Date().toUTCString()
         }
       </span>
      </p>

      <p className="chat__message">
       <span className="chat__name">Shiv </span>
         this is a  message
       <span className='chat__timestamp'>
         {
           new Date().toUTCString()
         }
       </span>
      </p>

      <p className="chat__message chat__receiver">
       <span className="chat__name">Shiv </span>
         this is a  message
       <span className='chat__timestamp'>
         {
           new Date().toUTCString()
         }
       </span>
      </p>
</div>
  <div className="chat__footer">
    <TagFacesIcon/>
   <form>
     <input placeholder='Type a message' type='text'/>
     <button type="submit">
     
          <SendIcon/>
     
      
     </button>
   </form>
   <MicIcon/>
  </div>
    </div>
  )
}

export default Chat
