import { Avatar } from '@material-ui/core';
import React from 'react';
import './styles.css';

function SidebarChat({ name, imgProfile, lastMessage }) {
    return (
        <div className="sidebarChat">
            <Avatar src={imgProfile} />
            <div className="sidebarChat__info">
                <h1>{name}</h1>
                <p>{lastMessage}</p>
            </div>
        </div>
    )
}

export default SidebarChat
