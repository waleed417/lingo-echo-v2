"use client";
import { useState } from 'react';

export default function LingoEchoV2() {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState<{role: string, text: string}[]>([]);
  const [adCount, setAdCount] = useState(0);
  const adsRequired = 5; 

  const handleAdClick = () => {
    // Replace the link below with your real Ad Link from Adsterra/AdSense later
    window.open("https://google.com", "_blank"); 
    setAdCount(prev => prev + 1);
  };

  const execute = () => {
    if (adCount < adsRequired) {
      alert(`Access Denied! You must watch ${adsRequired - adCount} more ads to unlock the system.`);
      return;
    }
    
    if (!input) return;
    const response = `[CORE_V2.0]: Analysis of "${input}" complete. Audio bridge active.`;
    
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
        <h1 className="text-xl mb-4 tracking-tighter border-b border-emerald-900 pb-2 text-center text-white">LINGO_ECHO // V2.0</h1>
        
        {/* AD-LOCK COUNTER */}
        <div className="mb-6 p-4 border border-dashed border-emerald-700 bg-emerald-950/20 rounded text-center">
          <p className="text-[10px] mb-2 uppercase tracking-widest text-emerald-300">Security Clearance: {adCount}/{adsRequired} Ads</p>
          <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full transition-all duration-500" style={{width: `${(adCount/adsRequired)*100}%`}}></div>
          </div>
          <button 
            onClick={handleAdClick} 
            className="mt-4 w-full bg-emerald-500 text-black text-[10px] font-bold py-2 hover:bg-emerald-400 uppercase rounded transition-colors"
          >
            Click to Watch Ad & Unlock
          </button>
        </div>

        {/* CHAT DISPLAY */}
        <div className="h-48 overflow-y-auto mb-4 space-y-3 text-left text-xs border-t border-emerald-900/50 pt-4 scrollbar-hide">
          {chat.length === 0 ? <p className="opacity-30 text-center uppercase text-[10px]">System Locked: Awaiting Clearance...</p> : null}
          {chat.map((c, i) => (
            <div key={i} className={c.role === 'ai' ? 'text-white pl-2 border-l border-emerald-500' : 'opacity-40 italic'}>
              {c.role === 'ai' ? '>> ' : '> '}{c.text}
            </div>
          ))}
        </div>

        {/* INPUT AREA */}
        <div className="flex flex-col gap-3">
          <input 
            className={`w-full bg-black border border-emerald-900 p-4 outline-none text-emerald-400 rounded ${adCount < adsRequired ? 'opacity-20 cursor-not-allowed' : 'focus:border-emerald-400'}`} 
            value={input} 
            disabled={adCount < adsRequired}
            onChange={(e) => setInput(e.target.value)} 
            onKeyDown={(e) => e.key === 'Enter' && execute()} 
            placeholder={adCount < adsRequired ? "LOCKED: FINISH ADS ABOVE" : "READY FOR INPUT..."}
          />
          <button 
            onClick={execute} 
            className={`p-4 font-black uppercase tracking-widest rounded transition-all ${adCount < adsRequired ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed' : 'bg-emerald-800 text-black hover:bg-emerald-400'}`}
          >
            {adCount < adsRequired ? "Locked" : "Initialize Logic"}
          </button>
        </div>
      </div>
    </main>
  );
}
