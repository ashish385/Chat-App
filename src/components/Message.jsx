import React, { useEffect, useState } from 'react'
import { auth } from '../firebase';

const Message = ({ message, setCurrentUser }) => {
  console.log(message);
  // console.log("user user id", auth.currentUser.uid);

  const [reciver, setReciver] = useState(false);
  useEffect(() => {
    if (message.uid === auth.currentUser.uid) {
      setReciver(true);
    } else {
      setCurrentUser(message);
    }
  }, []);
  return (
    <div>
      <div className={`${reciver ? "chat chat-end" : "chat chat-start"}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg" />
          </div>
        </div>
        <div className="chat-header">
          {message.name}
          <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble">{message.text}</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
      {/* <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="https://1fid.com/wp-content/uploads/2022/07/girl-profile-pic-14-1024x1024.jpg" />
          </div>
        </div>
        <div className="chat-header">
          Ritika
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble">I hate you!</div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div> */}
    </div>
  );
};

export default Message
