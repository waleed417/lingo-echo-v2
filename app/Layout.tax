'use client';
import React, { useState, useEffect } from 'react';

export default function LingoEcho() {
  const [adCount, setAdCount] = useState(0);
  const [unlocked, setUnlocked] = useState(false);

  const watchAd = () => {
    if (adCount < 4) {
      setAdCount(prev => prev + 1);
      alert("Ad playing... Done! Watch " + (4 - adCount) + " more to unlock.");
    } else {
      setAdCount(5);
      setUnlocked(true);
      alert("AI Access Granted!");
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>Lingo-Echo AI V2</h1>
      {!unlocked ? (
        <div style={{ border: '2px solid red', padding: '20px', borderRadius: '10px' }}>
          <h2>Security Clearance Required</h2>
          <p>Watch 5 short ads to unlock premium AI translation.</p>
          <div style={{ margin: '20px', fontSize: '24px' }}>Progress: {adCount}/5</div>
          <button 
            onClick={watchAd}
            style={{ padding: '15px 30px', fontSize: '18px', background: '#0070f3', color: 'white', border: 'none', borderRadius: '5px' }}
          >
            Watch Ad 📺
          </button>
        </div>
      ) : (
        <div style={{ border: '2px solid green', padding: '20px', borderRadius: '10px' }}>
          <h2>✅ AI Unlocked</h2>
          <textarea placeholder="Type here to translate..." style={{ width: '100%', height: '100px', marginTop: '10px' }} />
          <button style={{ marginTop: '10px', padding: '10px' }}>Translate with AI</button>
        </div>
      )}
    </div>
  );
}
