import React, { useMemo } from 'react';
import { useSocket } from '../hooks/useSocket';
import ConnectionStatus from './ConnectionStatus';
import StatsCard from './StatsCard';
import VehicleCountChart from './charts/VehicleCountChart';
import TotalVehicleTrendChart from './charts/TotalVehicleTrendChart';
import EmergencyVehicleChart from './charts/EmergencyVehicleChart';
import TopSignalsChart from './charts/TopSignalsChart';

const Dashboard: React.FC = () => {
    const { isConnected, currentData } = useSocket();

    // Compute summary statistics from the current data
    const stats = useMemo(() => {
        if (!currentData) return null;

        const signals = currentData.signals;
        const totalBikes = signals.reduce((sum, s) => sum + s.vehicleCrossedCount.bike, 0);
        const totalCars = signals.reduce((sum, s) => sum + s.vehicleCrossedCount.car, 0);
        const totalBuses = signals.reduce((sum, s) => sum + s.vehicleCrossedCount.bus, 0);
        const totalTrucks = signals.reduce((sum, s) => sum + s.vehicleCrossedCount.truck, 0);
        const totalVehicles = totalBikes + totalCars + totalBuses + totalTrucks;
        const totalEmergency = signals.reduce(
            (sum, s) =>
                sum +
                s.emergencyVehicleCrossedCount.ambulance +
                s.emergencyVehicleCrossedCount.fireServiceVehicle +
                s.emergencyVehicleCrossedCount.vipVehicle,
            0
        );
        const activeSignals = signals.length;

        return { totalVehicles, totalBikes, totalCars, totalBuses, totalTrucks, totalEmergency, activeSignals };
    }, [currentData]);

    const lastUpdated = currentData
        ? new Date(currentData.timestamp).toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        })
        : '--:--:--';

    return (
        <div className="dashboard">
            {/* ─── Header ───────────────────────────────────────── */}
            <header className="dashboard-header">
                <div className="header-left">
                    <div className="header-icon">🚦</div>
                    <div>
                        <h1 className="header-title">Traffic Management System</h1>
                        <p className="header-subtitle">Coimbatore City • Real-time Monitoring Dashboard</p>
                    </div>
                </div>
                <div className="header-right">
                    <div className="last-updated">
                        <span className="update-label">Last Updated</span>
                        <span className="update-time">{lastUpdated}</span>
                    </div>
                    <ConnectionStatus isConnected={isConnected} />
                </div>
            </header>

            {/* ─── Waiting Screen ───────────────────────────────── */}
            {!currentData && (
                <div className="waiting-screen">
                    <div className="waiting-spinner" />
                    <h2 className="waiting-title">
                        {isConnected ? 'Waiting for traffic data...' : 'Connecting to server...'}
                    </h2>
                    <p className="waiting-subtitle">
                        {isConnected
                            ? 'Data is broadcast every minute. The first batch will arrive shortly.'
                            : 'Make sure the backend server is running on port 5000.'}
                    </p>
                </div>
            )}

            {/* ─── Stats Cards ──────────────────────────────────── */}
            {stats && (
                <div className="stats-grid">
                    <StatsCard title="Total Vehicles" value={stats.totalVehicles} icon="🚗" color="#6366f1" trend="up" />
                    <StatsCard title="Active Signals" value={stats.activeSignals} icon="🚥" color="#22c55e" trend="neutral" />
                    <StatsCard title="Bikes" value={stats.totalBikes} icon="🏍️" color="#f59e0b" trend="up" />
                    <StatsCard title="Cars" value={stats.totalCars} icon="🚙" color="#3b82f6" trend="neutral" />
                    <StatsCard title="Buses" value={stats.totalBuses} icon="🚌" color="#8b5cf6" trend="down" />
                    <StatsCard title="Emergency" value={stats.totalEmergency} icon="🚨" color="#ef4444" trend="up" />
                </div>
            )}

            {/* ─── Charts Grid ──────────────────────────────────── */}
            {currentData && (
                <div className="charts-section">
                    <div className="charts-grid">
                        <div className="chart-card chart-wide">
                            <VehicleCountChart signals={currentData.signals} />
                        </div>
                        <div className="chart-card chart-wide">
                            <TotalVehicleTrendChart signals={currentData.signals} />
                        </div>
                        <div className="chart-card">
                            <EmergencyVehicleChart signals={currentData.signals} />
                        </div>
                        <div className="chart-card">
                            <TopSignalsChart signals={currentData.signals} />
                        </div>
                    </div>
                </div>
            )}

            {/* ─── Footer ───────────────────────────────────────── */}
            <footer className="dashboard-footer">
                <p>
                    Batch {currentData ? `${currentData.batchIndex + 1} / ${currentData.totalBatches}` : '— / —'} •{' '}
                    {currentData ? currentData.signals.length : 0} signals monitored
                </p>
            </footer>
        </div>
    );
};

export default Dashboard;
