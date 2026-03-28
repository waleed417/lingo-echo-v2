"use client";
import { useState } from 'react';

export default function LingoEchoV2() {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState<{role: string, text: string}[]>([]);

  const execute = () => {
    if (!input) return;
    const response = `[CORE_V2]: Analysis of "${input}" complete. System is stable. Voice bridge online.`;
    
    // Voice Synth Logic
    const speech = new SpeechSynthesisUtterance(response);
    speech.pitch = 1.3;
    window.speechSynthesis.speak(speech);

    setChat([{ role: 'user', text: input }, { role: 'ai', text: response }, ...chat]);
    setInput("");
  };

  return (
    <main className="min-h-screen bg-black text-emerald-400 font-mono p-6 flex flex-col items-center justify-center">
      <div className="w-full max-w-lg border border-emerald-900 p-6 rounded-lg bg-zinc-950 shadow-2xl">
        <h1 className="text-xl mb-4 tracking-tighter border-b border-emerald-900 pb-2">LINGO_ECHO // V2.0</h1>
        <div className="h-64 overflow-y-auto mb-4 space-y-3 text-xs scrollbar-hide">
          {chat.map((c, i) => (
            <div key={i} className={c.role === 'ai' ? 'text-white pl-2 border-l border-emerald-500' : 'opacity-40 italic'}>
              {c.role
