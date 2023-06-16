import { useNavigate } from 'react-router-dom'; // Add this
import React from "react";
import "./chatButton.css";
import {
  isLoggedIn,
} from "../../auth";
const ChatButton = ({ username, room, socket }) => {
    const navigate = useNavigate(); // Add this  
    // Add this
  const joinRoom = () => {
    if (!isLoggedIn() || !(getAuthType() === "Student")) {
      window.alert("Log in as a registered tenant first!");
      return;
    }
    if (room !== '' && username !== '') {
      console.log(`Joining room ${room} with username ${username}`);
      socket.emit('join_room', { username, room });
    }
    // Redirect to /chat
    navigate('/chat', { replace: true }); // Add this
  };
 
  return (
       <button className='chat-button' onClick={joinRoom}>Chat Here!</button>
  );
};

export default ChatButton;