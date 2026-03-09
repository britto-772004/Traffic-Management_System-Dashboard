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
    isDarkTheme: boolean;
}

const TotalVehicleTrendChart: React.FC<TotalVehicleTrendChartProps> = ({ signals, isDarkTheme }) => {
    const labels = signals.map((s) => s.trafficSignalLocation.area);
    const totals = signals.map(
        (s) =>
            s.vehicleCrossedCount.bike +
            s.vehicleCrossedCount.car +
            s.vehicleCrossedCount.bus +
            s.vehicleCrossedCount.truck
    );

    const textColor = isDarkTheme ? '#e2e8f0' : '#0f172a';
    const gridColor = isDarkTheme ? 'rgba(51, 65, 85, 0.3)' : 'rgba(203, 213, 225, 0.6)';
    const tooltipBg = isDarkTheme ? 'rgba(15, 23, 42, 0.9)' : 'rgba(255, 255, 255, 0.9)';
    const tooltipText = isDarkTheme ? '#e2e8f0' : '#0f172a';
    const tooltipBodyLabel = isDarkTheme ? '#94a3b8' : '#475569';
    const pointBg = isDarkTheme ? '#1e293b' : '#ffffff';

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
                pointBorderColor: pointBg,
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
                labels: { color: tooltipBodyLabel, font: { size: 11 }, padding: 15, usePointStyle: true, pointStyle: 'circle' },
            },
            title: {
                display: true,
                text: 'Total Vehicles per Signal Area',
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
            <Line data={data} options={options} />
        </div>
    );
};

export default TotalVehicleTrendChart;
