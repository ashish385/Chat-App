import React from 'react'

const Message = () => {
  return (
    <div>
      <div className="chat chat-start pb-6 ">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="https://static.fotor.com/app/features/img/aiface/advance/2.png" />
          </div>
        </div>
        <div className="chat-header">
          Ashish Soni
          <time className="text-xs opacity-50">12:45</time>
        </div>
        <div  className="chat-bubble">You were the Chosen One!</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="https://imgv3.fotor.com/images/slider-image/A-blurry-image-of-a-woman-wearing-red.jpg" />
          </div>
        </div>
        <div className="chat-header">
          Ritika
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble">I hate you!</div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div>
    </div>
  );
}

export default Message
