import cron from 'node-cron';
import { getIO } from '../socket/socketHandler';
import { trafficDataArray } from '../data/trafficData';

let currentIndex = 0;

export function startCronJob(): void {
    // Runs every minute: sends the next batch of traffic data to all connected clients
    cron.schedule('* * * * *', () => {
        const io = getIO();
        const data = trafficDataArray[currentIndex];

        const payload = {
            timestamp: new Date().toISOString(),
            batchIndex: currentIndex,
            totalBatches: trafficDataArray.length,
            signals: data,
        };

        io.emit('traffic-data', payload);

        const connectedClients = io.engine.clientsCount;
        console.log(
            `📡 [Cron] Emitted batch ${currentIndex + 1}/${trafficDataArray.length} to ${connectedClients} client(s) at ${payload.timestamp}`
        );

        // Cycle through data batches
        currentIndex = (currentIndex + 1) % trafficDataArray.length;
    });

    console.log('⏰ Cron job started — emitting traffic data every minute');
}
