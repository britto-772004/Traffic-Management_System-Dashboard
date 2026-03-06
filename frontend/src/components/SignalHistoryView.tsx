import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import type { TrafficSignalData } from '../types/traffic';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface SignalHistoryProps {
    signalId: number;
    onClose: () => void;
}

const SignalHistoryView: React.FC<SignalHistoryProps> = ({ signalId, onClose }) => {
    const [history, setHistory] = useState<TrafficSignalData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHistory = async () => {
            setLoading(true);
            try {
                const res = await fetch(`http://localhost:5000/api/signals/${signalId}/history`);
                const data = await res.json();
                if (data.history) {
                    setHistory(data.history);
                }
            } catch (error) {
                console.error("Failed to fetch history:", error);
            } finally {
                setLoading(false);
            }
        };

        if (signalId) {
            fetchHistory();
        }
    }, [signalId]);

    if (loading) {
        return <div className="waiting-spinner" style={{ margin: '2rem auto' }} />;
    }

    if (history.length === 0) {
        return <div>No history found for this signal.</div>;
    }

    const signalName = `${history[0].trafficSignalLocation.area} (${history[0].trafficSignalLocation.city})`;
    const labels = history.map((_, index) => `Batch ${index + 1}`);

    const data = {
        labels,
        datasets: [
            // Standard Vehicles
            {
                label: 'Bikes',
                data: history.map((s) => s.vehicleCrossedCount.bike),
                backgroundColor: 'rgba(99, 102, 241, 0.7)',
                stack: 'Stack 0',
            },
            {
                label: 'Cars',
                data: history.map((s) => s.vehicleCrossedCount.car),
                backgroundColor: 'rgba(34, 197, 94, 0.7)',
                stack: 'Stack 0',
            },
            {
                label: 'Buses',
                data: history.map((s) => s.vehicleCrossedCount.bus),
                backgroundColor: 'rgba(251, 191, 36, 0.7)',
                stack: 'Stack 0',
            },
            {
                label: 'Trucks',
                data: history.map((s) => s.vehicleCrossedCount.truck),
                backgroundColor: 'rgba(239, 68, 68, 0.7)',
                stack: 'Stack 0',
            },
            // Emergency Vehicles
            {
                label: 'Ambulance',
                data: history.map((s) => s.emergencyVehicleCrossedCount.ambulance),
                backgroundColor: 'rgba(255, 99, 132, 0.9)',
                stack: 'Stack 1',
            },
            {
                label: 'Fire Service',
                data: history.map((s) => s.emergencyVehicleCrossedCount.fireServiceVehicle),
                backgroundColor: 'rgba(255, 159, 64, 0.9)',
                stack: 'Stack 1',
            },
            {
                label: 'VIP Vehicles',
                data: history.map((s) => s.emergencyVehicleCrossedCount.vipVehicle),
                backgroundColor: 'rgba(153, 102, 255, 0.9)',
                stack: 'Stack 1',
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top' as const,
                labels: { color: '#94a3b8', font: { size: 11 } }
            },
            title: {
                display: true,
                text: `Traffic Composition for ${signalName}`,
                color: '#e2e8f0',
                font: { size: 16, weight: 'bold' as any },
            },
            tooltip: {
                mode: 'index' as const,
                intersect: false,
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                titleColor: '#e2e8f0',
                bodyColor: '#94a3b8',
                borderColor: 'rgba(99, 102, 241, 0.3)',
                borderWidth: 1,
            }
        },
        scales: {
            x: {
                stacked: true,
                ticks: { color: '#64748b' },
                grid: { color: 'rgba(51, 65, 85, 0.3)' }
            },
            y: {
                stacked: true,
                ticks: { color: '#64748b' },
                grid: { color: 'rgba(51, 65, 85, 0.3)' }
            },
        },
    };

    return (
        <div className="chart-card chart-wide" style={{ marginTop: '2rem', position: 'relative' }}>
            <button
                onClick={onClose}
                style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(239,68,68,0.2)',
                    color: '#f87171',
                    border: '1px solid rgba(239,68,68,0.5)',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    zIndex: 10
                }}>
                Close Details
            </button>
            <div className="chart-scroll-wrapper">
                <div className="chart-container chart-wide-inner">
                    <Bar data={data} options={options} />
                </div>
            </div>
        </div>
    );
};

export default SignalHistoryView;
