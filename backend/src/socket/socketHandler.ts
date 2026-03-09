import { Server as HttpServer } from 'http';
import { Server, Socket } from 'socket.io';

let io: Server;

export function initializeSocket(httpServer: HttpServer): Server {
    io = new Server(httpServer, {
        cors: {
            origin: ['http://localhost:5173', 'http://localhost:3000'],
            methods: ['GET', 'POST'],
        },
    });

    io.on('connection', (socket: Socket) => {
        console.log(`✅ Client connected: ${socket.id}`);

        socket.on('disconnect', (reason: string) => {
            console.log(`❌ Client disconnected: ${socket.id} — ${reason}`);
        });
    });

    console.log('🔌 Socket.IO server initialized');
    return io;
}

export function getIO(): Server {
    if (!io) {
        throw new Error('Socket.IO has not been initialized. Call initializeSocket first.');
    }
    return io;
}
