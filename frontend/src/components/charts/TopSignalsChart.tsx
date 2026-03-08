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

interface TopSignalsChartProps {
    signals: TrafficSignalData[];
    isDarkTheme: boolean;
}

const TopSignalsChart: React.FC<TopSignalsChartProps> = ({ signals, isDarkTheme }) => {
    // Sort signals by total vehicle count (descending) and take top 10
    const sorted = [...signals]
        .map((s) => ({
            area: s.trafficSignalLocation.area,
            total:
                s.vehicleCrossedCount.bike +
                s.vehicleCrossedCount.car +
                s.vehicleCrossedCount.bus +
                s.vehicleCrossedCount.truck,
        }))
        .sort((a, b) => b.total - a.total)
        .slice(0, 10);

    const data = {
        labels: sorted.map((s) => s.area),
        datasets: [
            {
                label: 'Total Vehicles',
                data: sorted.map((s) => s.total),
                backgroundColor: (context: { dataIndex: number }) => {
                    const colors = [
                        'rgba(99, 102, 241, 0.85)',
                        'rgba(79, 82, 221, 0.80)',
                        'rgba(129, 132, 255, 0.75)',
                        'rgba(99, 102, 241, 0.70)',
                        'rgba(139, 142, 255, 0.65)',
                        'rgba(99, 102, 241, 0.60)',
                        'rgba(149, 152, 255, 0.55)',
                        'rgba(99, 102, 241, 0.50)',
                        'rgba(159, 162, 255, 0.45)',
                        'rgba(99, 102, 241, 0.40)',
                    ];
                    return colors[context.dataIndex] || colors[0];
                },
                borderColor: 'rgba(99, 102, 241, 0.9)',
                borderWidth: 1,
                borderRadius: 6,
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
        indexAxis: 'y' as const,
        animation: { duration: 800, easing: 'easeInOutQuart' as const },
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: 'Top 10 Busiest Signals',
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
                ticks: { color: tooltipBodyLabel, font: { size: 11 } },
                grid: { color: gridColor },
            },
            y: {
                ticks: { color: tooltipBodyLabel, font: { size: 11 } },
                grid: { display: false },
            },
        },
    };

    return (
        <div className="chart-container">
            <Bar data={data} options={options} />
        </div>
    );
};

export default TopSignalsChart;
