import React, { useMemo } from 'react';
import { useSocket } from '../hooks/useSocket';
import ConnectionStatus from './ConnectionStatus';
import StatsCard from './StatsCard';
import VehicleCountChart from './charts/VehicleCountChart';
import TotalVehicleTrendChart from './charts/TotalVehicleTrendChart';
import EmergencyVehicleChart from './charts/EmergencyVehicleChart';
import TopSignalsChart from './charts/TopSignalsChart';
import SignalHistoryView from './SignalHistoryView';

const Dashboard: React.FC = () => {
    const { isConnected, currentData } = useSocket();
    const [signalList, setSignalList] = React.useState<{ id: number; area: string; city: string }[]>([]);
    const [selectedSignalId, setSelectedSignalId] = React.useState<number | null>(null);
    const [isDarkTheme, setIsDarkTheme] = React.useState<boolean>(true);

    React.useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
    }, [isDarkTheme]);

    React.useEffect(() => {
        fetch('http://localhost:5000/api/signals')
            .then((res) => res.json())
            .then((data) => setSignalList(data))
            .catch((err) => console.error('Failed to load signals', err));
    }, []);

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
                    <button
                        onClick={() => setIsDarkTheme(!isDarkTheme)}
                        style={{
                            background: 'transparent',
                            border: '1px solid var(--border-subtle)',
                            padding: '0.5rem 0.8rem',
                            borderRadius: '8px',
                            color: 'var(--text-primary)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontSize: '0.9rem'
                        }}
                    >
                        {isDarkTheme ? '☀️ Light Mode' : '🌙 Dark Mode'}
                    </button>
                    <div className="last-updated">
                        <span className="update-label">Last Updated</span>
                        <span className="update-time">{lastUpdated}</span>
                    </div>
                    <ConnectionStatus isConnected={isConnected} />
                </div>
            </header>

            {/* ─── Signal Selector ───────────────────────────────── */}
            <div className="signal-selector" style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>View Signal History:</label>
                <select
                    value={selectedSignalId || ''}
                    onChange={(e) => setSelectedSignalId(e.target.value ? Number(e.target.value) : null)}
                    style={{
                        padding: '0.6rem 1rem',
                        borderRadius: '8px',
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-primary)',
                        outline: 'none',
                    }}
                >
                    <option value="">-- View All Signals Overview --</option>
                    {signalList.map((sig) => (
                        <option key={sig.id} value={sig.id}>
                            {sig.area} - {sig.city} (Signal #{sig.id})
                        </option>
                    ))}
                </select>
            </div>

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

            {/* ─── Specific Signal History ──────────────────────── */}
            {selectedSignalId ? (
                <SignalHistoryView
                    signalId={selectedSignalId}
                    onClose={() => setSelectedSignalId(null)}
                    isDarkTheme={isDarkTheme}
                />
            ) : (
                /* ─── Charts Grid (Overview) ───────────────────────── */
                currentData && (
                    <div className="charts-section">
                        <div className="charts-grid">
                            <div className="chart-card chart-wide">
                                <div className="chart-scroll-wrapper">
                                    <div className="chart-container chart-wide-inner">
                                        <VehicleCountChart signals={currentData.signals} isDarkTheme={isDarkTheme} />
                                    </div>
                                </div>
                            </div>
                            <div className="chart-card chart-wide">
                                <div className="chart-scroll-wrapper">
                                    <div className="chart-container chart-wide-inner">
                                        <TotalVehicleTrendChart signals={currentData.signals} isDarkTheme={isDarkTheme} />
                                    </div>
                                </div>
                            </div>
                            <div className="chart-card">
                                <EmergencyVehicleChart signals={currentData.signals} isDarkTheme={isDarkTheme} />
                            </div>
                            <div className="chart-card">
                                <TopSignalsChart signals={currentData.signals} isDarkTheme={isDarkTheme} />
                            </div>
                        </div>
                    </div>
                )
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
