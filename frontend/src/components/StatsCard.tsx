import React from 'react';

interface StatsCardProps {
    title: string;
    value: number | string;
    icon: string;
    trend?: 'up' | 'down' | 'neutral';
    color: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon, trend, color }) => {
    const trendIcon = trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→';
    const trendClass = trend === 'up' ? 'trend-up' : trend === 'down' ? 'trend-down' : 'trend-neutral';

    return (
        <div className="stats-card" style={{ '--card-accent': color } as React.CSSProperties}>
            <div className="stats-card-header">
                <span className="stats-icon">{icon}</span>
                <span className={`stats-trend ${trendClass}`}>{trendIcon}</span>
            </div>
            <div className="stats-value">{typeof value === 'number' ? value.toLocaleString() : value}</div>
            <div className="stats-title">{title}</div>
        </div>
    );
};

export default StatsCard;
