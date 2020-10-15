import React, { useState, useEffect } from 'react';
import './styles.css';
import axios from '../../axios';

//ICONS 
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined, AttachFile, MoreVert } from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

//IMAGES
import profileOne from '../../images/lightning.png';

function Chat({ messages, user }) {

    //MESSAGE
    const [input, setInput] = useState(''); 

    //RECEIVED
    const [isReceived, setIsReceived] = useState(() => {
        let answer = Math.round(Math.random()) ? true : false;
        return answer;
    }); 

    useEffect(() => {
    }, [user]);

    const sendMessage = (e) => {

        e.preventDefault();

        axios.post('/messages/new', {
            message: input,
            name: user.displayName,  
            timestamp: new Date().toUTCString(),  
            received: isReceived,
        });

        setInput('');
    };

    return (
        <div className="chat">

            {/* Chat Header */}

            <div className="chat__header">

                <Avatar src={profileOne} />

                <div className="chat__headerInfo">
                    <h3>Public Chat</h3>
                    <p>Last seen at...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>

            </div>

            {/* Chat Body */}

            <div className="chat__body">

                {messages.map((message) => {
                    return (
                    <p key={message._id} className={`chat__message ${message.received && 'chat__reciever'}`}>
                        <span className="chat__name">{message.name}</span>        
                        {message.message}
                        {/* message.timestamp?.toDate() new Date().toUTCString() */}
                        <span className="chat__timestap">{message.timestamp}</span>  
                    </p>
                    )
                })}    

            </div>

            {/* Chat Footer */}

            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message" type="text"/>
                    <button onClick={sendMessage} type="submit">
                        Send a message
                    </button>
                </form>
                <MicIcon />
            </div>

        </div>
    )
}

export default Chat