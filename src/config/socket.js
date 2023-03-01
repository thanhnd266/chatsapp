import { io } from 'socket.io-client';

export const socket = io(process.env.REACT_APP_BASE_URL, {
    secure:true, 
    rejectUnauthorized: false,
    transports: ['polling']
});