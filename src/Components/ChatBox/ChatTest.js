// ChatBox.jsx
import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://42.113.198.31:8081'); // sửa lại đúng địa chỉ backend nếu cần

const ChatTest = () => {
  const [chatList, setChatList] = useState([]);
  const [content, setContent] = useState('');

  const senderId = 1; // Giả định user đang đăng nhập
  const receiverId = 2; // Người nhận

  const handleSend = () => {
    if (!content.trim()) return;

    const message = {
      senderId: senderId,
      senderType: 'USER',
      receiverId: receiverId,
      receiverType: 'SHOP',
      content: content,
      imageUrl: null,
      type: 'TEXT',
      isImage: false
    };

    // Gửi tới server qua socket
    socket.emit('sendMessage', message);

    // Hiển thị luôn tin nhắn trên FE
    setChatList((prev) => [...prev, message]);
    setContent('');
  };

  useEffect(() => {
    // Lắng nghe tin nhắn đến
    socket.on('receiveMessage', (msg) => {
      setChatList((prev) => [...prev, msg]);
    });

    return () => {
      socket.off('receiveMessage');
    };
  }, []);

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 16 }}>
      <h2>Chat Box</h2>

      <div style={{ border: '1px solid #ccc', padding: 10, height: 300, overflowY: 'auto', marginBottom: 16 }}>
        {chatList.map((msg, index) => (
          <div key={index} style={{ marginBottom: 8 }}>
            <strong>{msg.senderType} {msg.senderId}:</strong> {msg.content}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Nhập tin nhắn..."
          style={{ flex: 1, padding: 8 }}
        />
        <button onClick={handleSend} style={{ padding: '8px 16px' }}>Gửi</button>
      </div>
    </div>
  );
};

export default ChatTest;
