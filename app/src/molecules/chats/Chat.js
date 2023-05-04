import React, {useEffect, response} from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import './chat.css';


function Chat() {
  
  useEffect(() => {
    addResponseMessage('Welcome to this awesome chat!');
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    addResponseMessage(response);
  };

  return (
    <div className="Chats">
     <Widget
          handleNewUserMessage={handleNewUserMessage}
          title="Testing chat widget"
          subtitle="test"
        />
    </div>
  );
}

export default Chat;