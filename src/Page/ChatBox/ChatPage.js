import React from "react";
import "./ChatPage.css";
import { RiRobot2Line } from "react-icons/ri";

export default function ChatPage() {
  const content = [
    {
      id: 1,
      content: "wewwewewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
    },
    {
      id: 2,
      content: "esrerere",
    },
  ];
  return (
    <div
      style={{
        padding: "2% 3%",
        display: "flex",
      }}
    >
      <div
        style={{
          height: "80vh",
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
          <p
            style={{
              color: "black",
              fontSize: 22,
              margin: "0",
            }}
          >
            Xin chào, tôi là Trợ lý Xmark! Hôm nay tôi có thể giúp bạn khám phá
            những món đồ tuyệt vời như thế nào?
          </p>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              gap: 10,
            }}
          >
            {content.map((item) => {
              return (
                <p
                  style={{
                    background: "#25BA4D",
                    color: "white",
                    padding: "3%",
                    fontSize: "14px",
                    borderRadius: "10px",
                    width: "50%",
                    wordWrap: "break-word", // 👈 thêm dòng này
                    whiteSpace: "pre-wrap", // 👈 giữ xuống dòng nếu có ký tự \n
                  }}
                  key={item.id}
                >
                  {item.content}
                </p>
              );
            })}
          </div>
          <div
            style={{
              width: "100%",
              position: "relative",
            }}
          >
            <input
              style={{
                width: "100%",
                padding: "2% 5%",
                borderRadius: 30,
              }}
              type="text"
              placeholder="Nhập vào đây"
            />
            <button
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
      <div
        style={{
          width: "70%",
          padding: '3%'
        }}
      >
        <div>
          <p style={{ color: "black", fontSize: 36, }}>
            <RiRobot2Line />
          </p>
          <span>
            Trang phục sẽ hiển thị ở đây
          </span>
        </div>
      </div>
    </div>
  );
}
