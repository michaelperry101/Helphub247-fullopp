'use client';
import { useState, useRef } from 'react';

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi, I\'m CARYS. How can I help today?' }
  ]);
  const [input, setInput] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const fileRef = useRef(null);
  const bottomRef = useRef(null);

  async function sendMessage() {
    const text = input.trim();
    if (!text && !imagePreview) return;
    const userMsg = { role: 'user', content: text, image: imagePreview };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setImagePreview(null);
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userMsg)
    });
    const data = await res.json();
    setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  function onFile(e){
    const f = e.target.files?.[0];
    if(!f) return;
    const reader = new FileReader();
    reader.onload = () => setImagePreview(reader.result);
    reader.readAsDataURL(f);
  }

  return (
    <div className="container py-6 grid grid-rows-[1fr_auto] min-h-[calc(100vh-6rem)]">
      <div className="card p-4 space-y-4 overflow-y-auto">
        {messages.map((m, i) => (
          <div key={i} className={m.role==='user' ? 'text-right' : ''}>
            <div className={`inline-block max-w-[75%] rounded-xl px-4 py-2 ${m.role==='user' ? 'bg-brand text-white' : 'bg-slate-100 dark:bg-slate-800'}`}>
              {m.image && <img src={m.image} alt="upload" className="rounded mb-2" />}
              <p className="whitespace-pre-wrap">{m.content}</p>
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <div className="mt-4 flex items-center gap-2">
        <input
          type="text" value={input} onChange={(e)=>setInput(e.target.value)}
          onKeyDown={(e)=>{ if(e.key==='Enter') sendMessage(); }}
          placeholder="Message CARYS…"
          className="flex-1 border rounded-xl px-4 py-3 bg-white dark:bg-slate-900"
        />
        <input ref={fileRef} type="file" accept="image/*" onChange={onFile} className="hidden"/>
        <button className="btn btn-outline" onClick={()=>fileRef.current?.click()}>Upload</button>
        <button className="btn btn-primary" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
