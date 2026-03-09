import React from 'react';
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
import type { TrafficSignalData } from '../../types/traffic';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface VehicleCountChartProps {
    signals: TrafficSignalData[];
    isDarkTheme: boolean;
}

const VehicleCountChart: React.FC<VehicleCountChartProps> = ({ signals, isDarkTheme }) => {
    const labels = signals.map((s) => s.trafficSignalLocation.area);

    const data = {
        labels,
        datasets: [
            {
                label: 'Bikes',
                data: signals.map((s) => s.vehicleCrossedCount.bike),
                backgroundColor: 'rgba(99, 102, 241, 0.8)',
                borderColor: 'rgb(99, 102, 241)',
                borderWidth: 1,
                borderRadius: 4,
            },
            {
                label: 'Cars',
                data: signals.map((s) => s.vehicleCrossedCount.car),
                backgroundColor: 'rgba(34, 197, 94, 0.8)',
                borderColor: 'rgb(34, 197, 94)',
                borderWidth: 1,
                borderRadius: 4,
            },
            {
                label: 'Buses',
                data: signals.map((s) => s.vehicleCrossedCount.bus),
                backgroundColor: 'rgba(251, 191, 36, 0.8)',
                borderColor: 'rgb(251, 191, 36)',
                borderWidth: 1,
                borderRadius: 4,
            },
            {
                label: 'Trucks',
                data: signals.map((s) => s.vehicleCrossedCount.truck),
                backgroundColor: 'rgba(239, 68, 68, 0.8)',
                borderColor: 'rgb(239, 68, 68)',
                borderWidth: 1,
                borderRadius: 4,
            },
        ],
    };

    const textColor = isDarkTheme ? '#e2e8f0' : '#0f172a';
    const gridColor = isDarkTheme ? 'rgba(51, 65, 85, 0.3)' : 'rgba(203, 213, 225, 0.6)';
    const tooltipBg = isDarkTheme ? 'rgba(15, 23, 42, 0.9)' : 'rgba(255, 255, 255, 0.9)';
    const tooltipText = isDarkTheme ? '#e2e8f0' : '#0f172a';
    const tooltipBodyLabel = isDarkTheme ? '#94a3b8' : '#475569';

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 800, easing: 'easeInOutQuart' as const },
        plugins: {
            legend: {
                position: 'top' as const,
                labels: { color: tooltipBodyLabel, font: { size: 11 }, padding: 15, usePointStyle: true, pointStyle: 'circle' },
            },
            title: {
                display: true,
                text: 'Vehicle Count by Area',
                color: textColor,
                font: { size: 15, weight: 600 as const },
                padding: { bottom: 15 },
            },
            tooltip: {
                backgroundColor: tooltipBg,
                titleColor: tooltipText,
                bodyColor: tooltipBodyLabel,
                borderColor: 'rgba(99, 102, 241, 0.3)',
                borderWidth: 1,
                cornerRadius: 8,
                padding: 12,
            },
        },
        scales: {
            x: {
                ticks: { color: tooltipBodyLabel, font: { size: 10 }, maxRotation: 45 },
                grid: { color: gridColor },
            },
            y: {
                ticks: { color: tooltipBodyLabel, font: { size: 11 } },
                grid: { color: gridColor },
            },
        },
    };

    return (
        <div className="chart-container">
            <Bar data={data} options={options} />
        </div>
    );
};

export default VehicleCountChart;
