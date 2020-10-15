import React, { useEffect, useState } from 'react';
import './styles/App.css';
import Pusher from 'pusher-js';
import axios from './axios';

//COMPONENTS
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login';

function App() {

  const [messages, setMessages] = useState([]);

  const [user, setUser] = useState(null);

  /* useEffect(() => {
    if(user !== null){

      let algo = { user }

      console.log('INFO:', {
        algo_1: user.displayName,
        algo_2: user.email,
        algo_3: user.profileImg,
      });
    }
  }, [user]); */

  useEffect(() => {
    axios.get('/messages/sync').then((response) => {
      setMessages(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher('1176cabfbbd443871d9e', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      //alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };

  }, [messages]);

  return (
    
    <div className="app">
      
      {!user ? <><Login setUser={setUser} /> </> : <div className="app__body">
        <Sidebar user={user} messages={messages} />
        <Chat user={user} messages={messages} />
      </div>}
      
    </div>
  );
}

export default App;

