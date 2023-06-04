import React from "react";
import { useNavigate } from 'react-router-dom'; // Add this
import "./chatButton.css";

const Chat = ({ username, setUsername, room, setRoom, socket }) => {
  const navigate = useNavigate();

const joinRoom = () => {
  if (room !== '' && username !== '') {
    console.log(`Joining room ${room} with username ${username}`);
    socket.emit('join_room', { username, room });
  }

  // Redirect to /chat
  navigate('/chat', { replace: true }); // Add this
};

  return(
    <button className="chat-button" onClick={joinRoom}> Chat Here! </button>
  );
  };


export default Chat;
