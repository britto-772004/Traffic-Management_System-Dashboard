import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { initializeSocket } from './socket/socketHandler';
import { startCronJob } from './cron/cronJob';
import { trafficDataArray } from './data/trafficData';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Traffic Management System — Backend API');
});

// Endpoint to fetch available signals
app.get('/api/signals', (req, res) => {
    if (trafficDataArray.length > 0) {
        const signalsInfo = trafficDataArray[0].map((s) => ({
            id: s.trafficSignalNumber,
            area: s.trafficSignalLocation.area,
            city: s.trafficSignalLocation.city,
        }));
        res.json(signalsInfo);
    } else {
        res.json([]);
    }
});

// Endpoint to fetch all data batches over time for a specific signal
app.get('/api/signals/:id/history', (req, res) => {
    const signalId = parseInt(req.params.id);
    const history = trafficDataArray
        .map((batch) => batch.find((s) => s.trafficSignalNumber === signalId))
        .filter(Boolean); // Filter out undefined if not found in a batch

    if (history.length > 0) {
        res.json({ signalId, history });
    } else {
        res.status(404).json({ message: 'Signal not found' });
    }
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