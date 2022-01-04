
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat'
import Pusher from 'pusher-js'
import { useEffect, useState } from 'react';
import axios from './axios';



function App() {

  const [messages,setMessages] = useState ([]);


  useEffect(()=>{
    axios.get('/messages/sync')
    .then(response => {
      setMessages(response.data);
    })
  },[])

  useEffect(() => {
    const pusher = new Pusher('641ee921a159e325d8c8', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      setMessages([...messages, data])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }

  }, [messages])

  console.log(messages)

  return (
    <div className="App">
      <div className="App-body">
      <Sidebar/>
      <Chat messages={messages}/>
      </div>
    
    </div>
  );
}

export default App;
