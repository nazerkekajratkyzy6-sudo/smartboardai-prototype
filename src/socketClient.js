// Simple Socket.io client helper
import { io } from 'socket.io-client';
// by default connects to localhost:3001 - change to your deployed server URL
const socket = io('http://localhost:3001', { autoConnect: true });

export default socket;
