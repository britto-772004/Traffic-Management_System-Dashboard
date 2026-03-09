import { useEffect, useState, useRef, useCallback } from 'react';
import { io, Socket } from 'socket.io-client';
import type { TrafficPayload } from '../types/traffic';

const SOCKET_URL = 'http://localhost:5000';
const MAX_HISTORY = 30; // Keep last 30 data points

export function useSocket() {
    const [isConnected, setIsConnected] = useState(false);
    const [currentData, setCurrentData] = useState<TrafficPayload | null>(null);
    const [history, setHistory] = useState<TrafficPayload[]>([]);
    const socketRef = useRef<Socket | null>(null);

    const connect = useCallback(() => {
        if (socketRef.current?.connected) return;

        const socket = io(SOCKET_URL, {
            transports: ['websocket', 'polling'],
            reconnection: true,
            reconnectionDelay: 1000,
            reconnectionAttempts: Infinity,
        });

        socket.on('connect', () => {
            console.log('✅ Connected to server:', socket.id);
            setIsConnected(true);
        });

        socket.on('disconnect', (reason) => {
            console.log('❌ Disconnected:', reason);
            setIsConnected(false);
        });

        socket.on('traffic-data', (payload: TrafficPayload) => {
            console.log('📡 Received traffic data batch:', payload.batchIndex);
            setCurrentData(payload);
            setHistory((prev) => {
                const updated = [...prev, payload];
                return updated.slice(-MAX_HISTORY);
            });
        });

        socket.on('connect_error', (err) => {
            console.error('🔴 Connection error:', err.message);
            setIsConnected(false);
        });

        socketRef.current = socket;
    }, []);

    useEffect(() => {
        connect();

        return () => {
            if (socketRef.current) {
                socketRef.current.disconnect();
                socketRef.current = null;
            }
        };
    }, [connect]);

    return { isConnected, currentData, history };
}
