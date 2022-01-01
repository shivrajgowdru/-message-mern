import React from 'react'
import "./Sidebar.css"
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import {Avatar,IconButton} from "@material-ui/core";
import SidebarChat from './SidebarChat';
function Sidebar() {
  return (
    <div className='sidebar'>
     
      <div className='sidebar__header'>

      <Avatar src="https://i.pinimg.com/originals/04/8a/88/048a88859bf57ed5659bc95cabb2e447.png"/>
        
       <div className='sidebar__headerRight'>
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
  

       <div className="sidebar__search">
         <div className="sidebar__searchContainer">
          <IconButton>
          <SearchOutlinedIcon/>
          </IconButton>
           <input placeholder='Search or start new chat' type="text"/>       </div>
       </div>
      
<div className='sidebar__chats'>
  <SidebarChat/>
  <SidebarChat/>
  <SidebarChat/>
</div>


       </div>
     
  )
}

export default Sidebar
