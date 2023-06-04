// src/pages/chat/index.js

import styles from './styles.module.css';
import MessagesReceived from './messages';
import SendMessage from '../chatPage/send_messages';
import RoomAndUsersColumn from '../chatPage/rooms-and-users';

const Chat = ({ username, room, socket }) => {
  return (
    <div className={styles.chatContainer}>

<RoomAndUsersColumn socket={socket} username={username} room={room} />
      <div>
        <MessagesReceived socket={socket} />
        <SendMessage socket={socket} username={username} room={room} />
      </div>
    </div>
  );
};

export default Chat;