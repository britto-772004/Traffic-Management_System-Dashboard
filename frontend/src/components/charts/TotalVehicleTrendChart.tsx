import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import type { TrafficSignalData } from '../../types/traffic';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

interface TotalVehicleTrendChartProps {
    signals: TrafficSignalData[];
}

const TotalVehicleTrendChart: React.FC<TotalVehicleTrendChartProps> = ({ signals }) => {
    const labels = signals.map((s) => s.trafficSignalLocation.area);
    const totals = signals.map(
        (s) =>
            s.vehicleCrossedCount.bike +
            s.vehicleCrossedCount.car +
            s.vehicleCrossedCount.bus +
            s.vehicleCrossedCount.truck
    );

    const data = {
        labels,
        datasets: [
            {
                label: 'Total Vehicles',
                data: totals,
                borderColor: 'rgb(99, 102, 241)',
                backgroundColor: (context: { chart: ChartJS }) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
                    gradient.addColorStop(0, 'rgba(99, 102, 241, 0.4)');
                    gradient.addColorStop(1, 'rgba(99, 102, 241, 0.02)');
                    return gradient;
                },
                fill: true,
                tension: 0.4,
                pointBackgroundColor: 'rgb(99, 102, 241)',
                pointBorderColor: '#1e293b',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 7,
                borderWidth: 2.5,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 1000, easing: 'easeInOutQuart' as const },
        plugins: {
            legend: {
                position: 'top' as const,
                labels: { color: '#94a3b8', font: { size: 11 }, padding: 15, usePointStyle: true, pointStyle: 'circle' },
            },
            title: {
                display: true,
                text: 'Total Vehicles per Signal Area',
                color: '#e2e8f0',
                font: { size: 15, weight: 600 as const },
                padding: { bottom: 15 },
            },
            tooltip: {
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                titleColor: '#e2e8f0',
                bodyColor: '#94a3b8',
                borderColor: 'rgba(99, 102, 241, 0.3)',
                borderWidth: 1,
                cornerRadius: 8,
                padding: 12,
            },
        },
        scales: {
            x: {
                ticks: { color: '#64748b', font: { size: 10 }, maxRotation: 45 },
                grid: { color: 'rgba(51, 65, 85, 0.3)' },
            },
            y: {
                ticks: { color: '#64748b', font: { size: 11 } },
                grid: { color: 'rgba(51, 65, 85, 0.3)' },
            },
        },
    };

    return (
        <div className="chart-container">
            <Line data={data} options={options} />
        </div>
    );
};

export default TotalVehicleTrendChart;
