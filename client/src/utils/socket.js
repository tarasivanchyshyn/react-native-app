import { io } from 'socket.io-client';
import { backendURL } from '../constants/constants';

const socket = io.connect(backendURL);

export default socket;
