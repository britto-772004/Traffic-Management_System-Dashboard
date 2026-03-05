import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import type { TrafficSignalData } from '../../types/traffic';

ChartJS.register(ArcElement, Tooltip, Legend);

interface EmergencyVehicleChartProps {
    signals: TrafficSignalData[];
}

const EmergencyVehicleChart: React.FC<EmergencyVehicleChartProps> = ({ signals }) => {
    const totalAmbulance = signals.reduce((sum, s) => sum + s.emergencyVehicleCrossedCount.ambulance, 0);
    const totalFire = signals.reduce((sum, s) => sum + s.emergencyVehicleCrossedCount.fireServiceVehicle, 0);
    const totalVIP = signals.reduce((sum, s) => sum + s.emergencyVehicleCrossedCount.vipVehicle, 0);

    const data = {
        labels: ['Ambulance', 'Fire Service', 'VIP Vehicle'],
        datasets: [
            {
                data: [totalAmbulance, totalFire, totalVIP],
                backgroundColor: [
                    'rgba(239, 68, 68, 0.85)',
                    'rgba(251, 146, 60, 0.85)',
                    'rgba(168, 85, 247, 0.85)',
                ],
                borderColor: [
                    'rgb(239, 68, 68)',
                    'rgb(251, 146, 60)',
                    'rgb(168, 85, 247)',
                ],
                borderWidth: 2,
                hoverOffset: 12,
                spacing: 3,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 800, easing: 'easeInOutQuart' as const },
        cutout: '60%',
        plugins: {
            legend: {
                position: 'bottom' as const,
                labels: { color: '#94a3b8', font: { size: 12 }, padding: 20, usePointStyle: true, pointStyle: 'circle' },
            },
            title: {
                display: true,
                text: 'Emergency Vehicles',
                color: '#e2e8f0',
                font: { size: 15, weight: 600 as const },
                padding: { bottom: 15 },
            },
            tooltip: {
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                titleColor: '#e2e8f0',
                bodyColor: '#94a3b8',
                borderColor: 'rgba(239, 68, 68, 0.3)',
                borderWidth: 1,
                cornerRadius: 8,
                padding: 12,
            },
        },
    };

    return (
        <div className="chart-container">
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default EmergencyVehicleChart;
