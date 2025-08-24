'use client';
import { useEffect, useState } from 'react';
export default function ThemeToggle(){
  const [dark, setDark] = useState(false);
  useEffect(()=>{ const t = localStorage.getItem('theme'); if(t==='dark'){ setDark(true); document.documentElement.classList.add('dark');}},[]);
  function toggle(){ const n=!dark; setDark(n); document.documentElement.classList.toggle('dark', n); localStorage.setItem('theme', n?'dark':'light');}
  return <button onClick={toggle} className="btn btn-outline text-sm">{dark?'Light':'Dark'} Mode</button>;
}
