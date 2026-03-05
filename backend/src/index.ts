import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { initializeSocket } from './socket/socketHandler';
import { startCronJob } from './cron/cronJob';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Traffic Management System — Backend API');
});

// Create HTTP server and attach Socket.IO
const httpServer = createServer(app);
initializeSocket(httpServer);

// Start the cron job to broadcast traffic data every minute
startCronJob();

httpServer.listen(port, () => {
    console.log(`🚦 Server is running on port ${port}`);
    console.log(`🔌 WebSocket ready at ws://localhost:${port}`);
});