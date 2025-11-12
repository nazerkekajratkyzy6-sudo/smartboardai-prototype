SmartBoard.Ai — prototype project
---------------------------------
Author: Nazereke Kairatkyzy (nazerkekajratkyzy6@gmail.com)

Contents:
- src/SmartBoardAI.jsx   (React component with drag/edit/delete and basic Socket.io + Firebase hooks)
- src/firebase.js        (Firebase client init - fill your config)
- src/socketClient.js    (socket.io client helper)
- server/index.js        (simple Socket.io server example)
- package.json

Quick start (development):
1. Fill `src/firebase.js` with your Firebase project config.
2. npm install
3. npm run dev (or npm start if you have vite global) to run the frontend dev server.
4. To run Socket.io server locally: node server/index.js
5. The component will try to connect to Firebase (if configured) and to Socket.io at default ws://localhost:3001.

Notes:
- Firebase integration uses Realtime Database / Firestore patterns in comments; adapt to your preference.
- Socket.io server is a minimal example for real-time syncing between clients. In production use HTTPS, auth, and deploy to a hosted server (Heroku, Render, Railway, or your own).
