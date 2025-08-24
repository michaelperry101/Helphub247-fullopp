"use client";
import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { role: "user", text: input }]);
    setInput("");

    // simple demo response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "This is a demo AI response." },
      ]);
    }, 500);
  };

  return (
    <div className="flex flex-col h-[80vh] border rounded-md shadow bg-white dark:bg-gray-900">
      {/* Chat area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded max-w-xs ${
              msg.role === "user"
                ? "ml-auto bg-blue-500 text-white"
                : "mr-auto bg-gray-200 text-black dark:bg-gray-700 dark:text-white"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input area */}
      <div className="p-2 border-t flex">
        <input
          type="text"
          className="flex-1 px-3 py-2 border rounded-md dark:bg-gray-800 dark:text-white"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="ml-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}
