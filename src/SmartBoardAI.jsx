import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import socket from './socketClient';
import { db, ref, set, onValue } from './firebase';

export default function SmartBoardAI() {
  const [showAI, setShowAI] = useState(false);
  const [elements, setElements] = useState([]);
  const [currentEditId, setCurrentEditId] = useState(null);

  useEffect(() => {
    socket.on('board:update', (data) => {
      if (data && data.elements) setElements(data.elements);
    });
    return () => socket.off('board:update');
  }, []);

  const handleGenerate = (text) => {
    const newEl = { id: uuidv4(), text: text || '🧩 Ребус: ⚡️🌞➕🌿 = Фотосинтез', x: '40%', y: '30%' };
    const newElements = [...elements, newEl];
    setElements(newElements);
    socket.emit('board:update', { elements: newElements });
  };

  const handleDelete = (id) => {
    const newElements = elements.filter(e => e.id !== id);
    setElements(newElements);
    socket.emit('board:update', { elements: newElements });
  };

  return (
    <div style={{padding:20}}>
      <h2>SmartBoard.Ai — Prototype</h2>
      <button onClick={() => setShowAI(true)}>Open AI</button>
      <div style={{border:'1px solid #ddd', height:400, marginTop:12, position:'relative'}}>
        {elements.map(el => (
          <div key={el.id} style={{position:'absolute', left:el.x, top:el.y, background:'#e6f7ff', padding:8, borderRadius:8}}>
            <div>{el.text}</div>
            <button onClick={() => handleDelete(el.id)}>Delete</button>
          </div>
        ))}
      </div>
      {showAI && (
        <div style={{marginTop:12}}>
          <input id="ai-input" placeholder="Текст задания" />
          <button onClick={() => { const v = document.getElementById('ai-input').value; handleGenerate(v); }}>Generate & Insert</button>
          <button onClick={() => setShowAI(false)}>Close</button>
        </div>
      )}
    </div>
  );
}
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SmartBoardAI />);
