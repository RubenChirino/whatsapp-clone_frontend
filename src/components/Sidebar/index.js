import React, { useState, useEffect } from 'react';
import './styles.css';

//ICONS 
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat'; 
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';

//IMAGES
import profileOne from '../../images/lightning.png';
import profileTwo from '../../images/profile.jpg'; 
import profileThree from '../../images/college.png';

//COMPONENTS
import SidebarChat from '../SidebarChat';

function Sidebar({ user, messages}) {  

    const [lastMessage, setLastMessage] = useState('');

    useEffect(() => {
        setLastMessage(() => {
           let msg = messages.length - 1;
           return messages[msg].message;
        });
    }, [user, messages])

    return (
        <div className="sidebar">

            {/* HEDAER */}

            <div className="sidebar__header">
                
                <Avatar src={(user.photoURL) && user.photoURL} />  

                <div className="sidebar__headerRight">                 
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>

                    <IconButton>
                        <ChatIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

            </div>

            {/* Search */}

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>

            {/* Body (Chats) */}

            <div className="sidebar__chats">
                <SidebarChat name='Public chat' imgProfile={profileOne} lastMessage={lastMessage} />
                <SidebarChat name='Ruben Chirino' imgProfile={profileTwo} lastMessage='What do you think of this clone?' />
                <SidebarChat name='Collage' imgProfile={profileThree} lastMessage='Is the work due today? 😨' />
            </div>

        </div>
    )
}

export default Sidebar
