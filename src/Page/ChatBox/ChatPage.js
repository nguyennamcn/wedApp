import React, { useEffect, useState } from "react";
import "./ChatPage.css";
import { RiRobot2Line } from "react-icons/ri";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default function ChatPage() {
  const [content, setContent] = useState([]);
  const [input, setInput] = useState("");
  const [sessionId, setSessionId] = useState("");
  const [showIntro, setShowIntro] = useState(true);

  // Tạo session_id khi mở trang
  useEffect(() => {
    const newSessionId = uuidv4();
    setSessionId(newSessionId);
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;
    if (showIntro) {
      setShowIntro(false);
    }

    // Thêm tin nhắn người dùng vào khung chat
    const userMessage = { id: Date.now(), content: input, sender: "user" };
    setContent((prev) => [...prev, userMessage]);

    console.log("first");

    try {
      const res = await axios.post(
        "http://ddns.truong51972.id.vn/api/ai_agent",
        {
          session_id: sessionId,
          user_id: "2",
          messages: input,
        }
      );

      const botMessage = {
        id: Date.now() + 1,
        content: res.data.messages,
        sender: "bot",
      };
      setContent((prev) => [...prev, botMessage]);
      setInput("");
    } catch (error) {
      console.error("Lỗi khi gửi tin nhắn:", error);
    }
  };

  return (
    <div style={{ padding: "2% 3%", display: "flex" }}>
      <div
        style={{
          height: "70vh",
          padding: "2%",
          width: "30%",
          textAlign: "center",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <p style={{ color: "black", fontSize: 36 }}>
            <RiRobot2Line />
          </p>
          {showIntro && (
            <p style={{ color: "black", fontSize: 22, margin: 0 }}>
              Xin chào, tôi là Trợ lý Xmark! Hôm nay tôi có thể giúp bạn khám
              phá những món đồ tuyệt vời như thế nào?
            </p>
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%", // đảm bảo chiếm hết chiều cao có thể
            maxHeight: "50vh", // hoặc đặt cố định nếu bạn muốn
          }}
        >
          {/* Vùng hiển thị tin nhắn có scroll */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              paddingRight: "5px",
              paddingBottom: "10px", // tránh che nội dung khi có thanh cuộn
            }}
          >
            {content.map((item) => (
              <p
                key={item.id}
                style={{
                  background: item.sender === "bot" ? "#25BA4D" : "#ccc",
                  color: item.sender === "bot" ? "white" : "black",
                  padding: "3%",
                  fontSize: "14px",
                  borderRadius: "10px",
                  width: "100%",
                  wordWrap: "break-word",
                  whiteSpace: "pre-wrap",
                  textAlign: "left",
                }}
              >
                {item.content}
              </p>
            ))}
          </div>

          {/* Vùng nhập tin nhắn */}
          <div style={{ width: "100%", position: "relative", marginTop: 10 }}>
            <input
              style={{
                width: "100%",
                padding: "2% 5%",
                borderRadius: 30,
              }}
              type="text"
              placeholder="Nhập vào đây"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              style={{
                position: "absolute",
                right: "2%",
                top: "10%",
                border: "none",
                background: "#25BA4D",
                color: "white",
                borderRadius: "20px",
                padding: "5px 10px",
              }}
            >
              ➤
            </button>
          </div>
        </div>
      </div>
      <div style={{ width: "70%", padding: "3%" }}>
        <p style={{ color: "black", fontSize: 36 }}>
          <RiRobot2Line />
        </p>
        <span>Trang phục sẽ hiển thị ở đây</span>
      </div>
    </div>
  );
}
