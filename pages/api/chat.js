import { useState } from "react";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Welcome to Helphub247! How can I assist you today?" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);

    // Fake bot reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "This is a demo response 🤖" }
      ]);
    }, 800);

    setInput("");
  };

  return (
    <div style={{ 
      display: "flex", flexDirection: "column", 
      maxWidth: "600px", margin: "40px auto", 
      border: "1px solid #ddd", borderRadius: "10px",
      height: "80vh"
    }}>
      {/* Chat messages */}
      <div style={{ flex: 1, padding: "10px", overflowY: "auto" }}>
        {messages.map((msg, i) => (
          <div 
            key={i} 
            style={{ 
              textAlign: msg.sender === "user" ? "right" : "left",
              margin: "5px 0"
            }}
          >
            <span 
              style={{
                display: "inline-block",
                padding: "8px 12px",
                borderRadius: "15px",
                background: msg.sender === "user" ? "#0070f3" : "#e5e5ea",
                color: msg.sender === "user" ? "#fff" : "#000"
              }}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      {/* Input box */}
      <div style={{ display: "flex", padding: "10px", borderTop: "1px solid #ddd" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          style={{ flex: 1, padding: "10px" }}
        />
        <button 
          onClick={sendMessage}
          style={{ padding: "10px 20px", marginLeft: "10px", cursor: "pointer" }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
