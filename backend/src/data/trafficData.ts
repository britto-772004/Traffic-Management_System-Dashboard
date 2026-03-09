// ============================================================
// Traffic Signal Data — Replace this array with your real data
// ============================================================

export interface TrafficSignalLocation {
    ward: number;
    area: string;
    city: string;
    state: string;
}

export interface VehicleCrossedCount {
    bike: number;
    car: number;
    bus: number;
    truck: number;
}

export interface EmergencyVehicleCrossedCount {
    ambulance: number;
    fireServiceVehicle: number;
    vipVehicle: number;
}

export interface TrafficSignalData {
    trafficSignalNumber: number;
    trafficSignalLocation: TrafficSignalLocation;
    vehicleCrossedCount: VehicleCrossedCount;
    emergencyVehicleCrossedCount: EmergencyVehicleCrossedCount;
}

export const trafficDataArray: TrafficSignalData[][] = [
    // ── Batch 1 ──────────────────────────────────────────────
    [
        {
            trafficSignalNumber: 1,
            trafficSignalLocation: { ward: 1, area: "Saravanampatti", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 29, car: 13, bus: 14, truck: 2 },
            emergencyVehicleCrossedCount: { ambulance: 3, fireServiceVehicle: 1, vipVehicle: 5 },
        },
        {
            trafficSignalNumber: 2,
            trafficSignalLocation: { ward: 12, area: "Peelamedu", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 156, car: 84, bus: 22, truck: 8 },
            emergencyVehicleCrossedCount: { ambulance: 1, fireServiceVehicle: 0, vipVehicle: 2 },
        },
        {
            trafficSignalNumber: 3,
            trafficSignalLocation: { ward: 24, area: "RS Puram", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 210, car: 145, bus: 12, truck: 3 },
            emergencyVehicleCrossedCount: { ambulance: 4, fireServiceVehicle: 1, vipVehicle: 0 },
        },
        {
            trafficSignalNumber: 4,
            trafficSignalLocation: { ward: 45, area: "Gandhipuram", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 340, car: 190, bus: 85, truck: 12 },
            emergencyVehicleCrossedCount: { ambulance: 6, fireServiceVehicle: 2, vipVehicle: 1 },
        },
        {
            trafficSignalNumber: 5,
            trafficSignalLocation: { ward: 8, area: "Thudiyalur", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 112, car: 65, bus: 18, truck: 15 },
            emergencyVehicleCrossedCount: { ambulance: 2, fireServiceVehicle: 0, vipVehicle: 0 },
        },
        {
            trafficSignalNumber: 6,
            trafficSignalLocation: { ward: 63, area: "Singanallur", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 275, car: 130, bus: 45, truck: 22 },
            emergencyVehicleCrossedCount: { ambulance: 5, fireServiceVehicle: 1, vipVehicle: 3 },
        },
        {
            trafficSignalNumber: 7,
            trafficSignalLocation: { ward: 81, area: "Ukkadam", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 310, car: 115, bus: 95, truck: 30 },
            emergencyVehicleCrossedCount: { ambulance: 3, fireServiceVehicle: 0, vipVehicle: 1 },
        },
        {
            trafficSignalNumber: 8,
            trafficSignalLocation: { ward: 37, area: "Vadavalli", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 145, car: 95, bus: 14, truck: 4 },
            emergencyVehicleCrossedCount: { ambulance: 1, fireServiceVehicle: 0, vipVehicle: 0 },
        },
        {
            trafficSignalNumber: 9,
            trafficSignalLocation: { ward: 52, area: "Ramanathapuram", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 220, car: 160, bus: 32, truck: 9 },
            emergencyVehicleCrossedCount: { ambulance: 4, fireServiceVehicle: 1, vipVehicle: 2 },
        },
        {
            trafficSignalNumber: 10,
            trafficSignalLocation: { ward: 70, area: "Town Hall", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 405, car: 120, bus: 60, truck: 18 },
            emergencyVehicleCrossedCount: { ambulance: 2, fireServiceVehicle: 1, vipVehicle: 1 },
        },
        {
            trafficSignalNumber: 11,
            trafficSignalLocation: { ward: 15, area: "Kalapatti", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 185, car: 105, bus: 20, truck: 11 },
            emergencyVehicleCrossedCount: { ambulance: 1, fireServiceVehicle: 0, vipVehicle: 4 },
        },
        {
            trafficSignalNumber: 12,
            trafficSignalLocation: { ward: 28, area: "Saibaba Colony", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 195, car: 140, bus: 25, truck: 5 },
            emergencyVehicleCrossedCount: { ambulance: 3, fireServiceVehicle: 0, vipVehicle: 1 },
        },
        {
            trafficSignalNumber: 13,
            trafficSignalLocation: { ward: 86, area: "Kuniyamuthur", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 160, car: 85, bus: 35, truck: 14 },
            emergencyVehicleCrossedCount: { ambulance: 2, fireServiceVehicle: 1, vipVehicle: 0 },
        },
        {
            trafficSignalNumber: 14,
            trafficSignalLocation: { ward: 5, area: "Kavundampalayam", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 130, car: 70, bus: 22, truck: 10 },
            emergencyVehicleCrossedCount: { ambulance: 1, fireServiceVehicle: 0, vipVehicle: 1 },
        },
        {
            trafficSignalNumber: 15,
            trafficSignalLocation: { ward: 92, area: "Kovaipudur", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 95, car: 60, bus: 10, truck: 2 },
            emergencyVehicleCrossedCount: { ambulance: 0, fireServiceVehicle: 0, vipVehicle: 0 },
        },
        {
            trafficSignalNumber: 16,
            trafficSignalLocation: { ward: 41, area: "Race Course", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 110, car: 210, bus: 5, truck: 1 },
            emergencyVehicleCrossedCount: { ambulance: 2, fireServiceVehicle: 0, vipVehicle: 6 },
        },
        {
            trafficSignalNumber: 17,
            trafficSignalLocation: { ward: 58, area: "Puliakulam", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 175, car: 90, bus: 18, truck: 6 },
            emergencyVehicleCrossedCount: { ambulance: 1, fireServiceVehicle: 0, vipVehicle: 2 },
        },
        {
            trafficSignalNumber: 18,
            trafficSignalLocation: { ward: 77, area: "Sundarapuram", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 230, car: 115, bus: 40, truck: 25 },
            emergencyVehicleCrossedCount: { ambulance: 4, fireServiceVehicle: 1, vipVehicle: 0 },
        },
        {
            trafficSignalNumber: 19,
            trafficSignalLocation: { ward: 22, area: "Vilankurichi", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 140, car: 95, bus: 15, truck: 7 },
            emergencyVehicleCrossedCount: { ambulance: 2, fireServiceVehicle: 0, vipVehicle: 3 },
        },
        {
            trafficSignalNumber: 20,
            trafficSignalLocation: { ward: 68, area: "Ondipudur", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 260, car: 125, bus: 55, truck: 18 },
            emergencyVehicleCrossedCount: { ambulance: 3, fireServiceVehicle: 2, vipVehicle: 1 },
        },
    ],

    // ── Batch 2 (slightly varied data to simulate changing traffic) ──
    [
        {
            trafficSignalNumber: 1,
            trafficSignalLocation: { ward: 1, area: "Saravanampatti", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 45, car: 20, bus: 10, truck: 3 },
            emergencyVehicleCrossedCount: { ambulance: 1, fireServiceVehicle: 0, vipVehicle: 2 },
        },
        {
            trafficSignalNumber: 2,
            trafficSignalLocation: { ward: 12, area: "Peelamedu", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 180, car: 95, bus: 28, truck: 10 },
            emergencyVehicleCrossedCount: { ambulance: 2, fireServiceVehicle: 1, vipVehicle: 0 },
        },
        {
            trafficSignalNumber: 3,
            trafficSignalLocation: { ward: 24, area: "RS Puram", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 195, car: 130, bus: 15, truck: 5 },
            emergencyVehicleCrossedCount: { ambulance: 2, fireServiceVehicle: 0, vipVehicle: 1 },
        },
        {
            trafficSignalNumber: 4,
            trafficSignalLocation: { ward: 45, area: "Gandhipuram", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 380, car: 210, bus: 92, truck: 15 },
            emergencyVehicleCrossedCount: { ambulance: 4, fireServiceVehicle: 1, vipVehicle: 3 },
        },
        {
            trafficSignalNumber: 5,
            trafficSignalLocation: { ward: 8, area: "Thudiyalur", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 98, car: 55, bus: 20, truck: 12 },
            emergencyVehicleCrossedCount: { ambulance: 0, fireServiceVehicle: 0, vipVehicle: 1 },
        },
        {
            trafficSignalNumber: 6,
            trafficSignalLocation: { ward: 63, area: "Singanallur", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 290, car: 140, bus: 50, truck: 18 },
            emergencyVehicleCrossedCount: { ambulance: 3, fireServiceVehicle: 0, vipVehicle: 2 },
        },
        {
            trafficSignalNumber: 7,
            trafficSignalLocation: { ward: 81, area: "Ukkadam", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 325, car: 120, bus: 88, truck: 28 },
            emergencyVehicleCrossedCount: { ambulance: 5, fireServiceVehicle: 1, vipVehicle: 0 },
        },
        {
            trafficSignalNumber: 8,
            trafficSignalLocation: { ward: 37, area: "Vadavalli", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 160, car: 100, bus: 12, truck: 6 },
            emergencyVehicleCrossedCount: { ambulance: 0, fireServiceVehicle: 0, vipVehicle: 1 },
        },
        {
            trafficSignalNumber: 9,
            trafficSignalLocation: { ward: 52, area: "Ramanathapuram", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 240, car: 170, bus: 28, truck: 11 },
            emergencyVehicleCrossedCount: { ambulance: 3, fireServiceVehicle: 0, vipVehicle: 1 },
        },
        {
            trafficSignalNumber: 10,
            trafficSignalLocation: { ward: 70, area: "Town Hall", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 420, car: 135, bus: 55, truck: 20 },
            emergencyVehicleCrossedCount: { ambulance: 1, fireServiceVehicle: 0, vipVehicle: 2 },
        },
        {
            trafficSignalNumber: 11,
            trafficSignalLocation: { ward: 15, area: "Kalapatti", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 170, car: 110, bus: 22, truck: 9 },
            emergencyVehicleCrossedCount: { ambulance: 2, fireServiceVehicle: 1, vipVehicle: 2 },
        },
        {
            trafficSignalNumber: 12,
            trafficSignalLocation: { ward: 28, area: "Saibaba Colony", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 210, car: 150, bus: 22, truck: 7 },
            emergencyVehicleCrossedCount: { ambulance: 1, fireServiceVehicle: 0, vipVehicle: 0 },
        },
        {
            trafficSignalNumber: 13,
            trafficSignalLocation: { ward: 86, area: "Kuniyamuthur", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 150, car: 90, bus: 30, truck: 16 },
            emergencyVehicleCrossedCount: { ambulance: 3, fireServiceVehicle: 0, vipVehicle: 1 },
        },
        {
            trafficSignalNumber: 14,
            trafficSignalLocation: { ward: 5, area: "Kavundampalayam", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 145, car: 78, bus: 18, truck: 8 },
            emergencyVehicleCrossedCount: { ambulance: 0, fireServiceVehicle: 1, vipVehicle: 0 },
        },
        {
            trafficSignalNumber: 15,
            trafficSignalLocation: { ward: 92, area: "Kovaipudur", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 105, car: 55, bus: 12, truck: 3 },
            emergencyVehicleCrossedCount: { ambulance: 1, fireServiceVehicle: 0, vipVehicle: 1 },
        },
        {
            trafficSignalNumber: 16,
            trafficSignalLocation: { ward: 41, area: "Race Course", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 125, car: 225, bus: 8, truck: 2 },
            emergencyVehicleCrossedCount: { ambulance: 1, fireServiceVehicle: 0, vipVehicle: 4 },
        },
        {
            trafficSignalNumber: 17,
            trafficSignalLocation: { ward: 58, area: "Puliakulam", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 190, car: 100, bus: 15, truck: 8 },
            emergencyVehicleCrossedCount: { ambulance: 2, fireServiceVehicle: 0, vipVehicle: 1 },
        },
        {
            trafficSignalNumber: 18,
            trafficSignalLocation: { ward: 77, area: "Sundarapuram", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 245, car: 120, bus: 35, truck: 20 },
            emergencyVehicleCrossedCount: { ambulance: 2, fireServiceVehicle: 0, vipVehicle: 1 },
        },
        {
            trafficSignalNumber: 19,
            trafficSignalLocation: { ward: 22, area: "Vilankurichi", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 155, car: 105, bus: 12, truck: 9 },
            emergencyVehicleCrossedCount: { ambulance: 1, fireServiceVehicle: 1, vipVehicle: 2 },
        },
        {
            trafficSignalNumber: 20,
            trafficSignalLocation: { ward: 68, area: "Ondipudur", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 275, car: 130, bus: 60, truck: 22 },
            emergencyVehicleCrossedCount: { ambulance: 4, fireServiceVehicle: 1, vipVehicle: 0 },
        },
    ],

    // ── Batch 3 ──────────────────────────────────────────────
    [
        {
            trafficSignalNumber: 1,
            trafficSignalLocation: { ward: 1, area: "Saravanampatti", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 35, car: 18, bus: 8, truck: 1 },
            emergencyVehicleCrossedCount: { ambulance: 0, fireServiceVehicle: 0, vipVehicle: 1 },
        },
        {
            trafficSignalNumber: 2,
            trafficSignalLocation: { ward: 12, area: "Peelamedu", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 168, car: 90, bus: 25, truck: 12 },
            emergencyVehicleCrossedCount: { ambulance: 3, fireServiceVehicle: 0, vipVehicle: 1 },
        },
        {
            trafficSignalNumber: 3,
            trafficSignalLocation: { ward: 24, area: "RS Puram", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 225, car: 155, bus: 10, truck: 4 },
            emergencyVehicleCrossedCount: { ambulance: 1, fireServiceVehicle: 0, vipVehicle: 2 },
        },
        {
            trafficSignalNumber: 4,
            trafficSignalLocation: { ward: 45, area: "Gandhipuram", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 360, car: 200, bus: 78, truck: 14 },
            emergencyVehicleCrossedCount: { ambulance: 5, fireServiceVehicle: 0, vipVehicle: 2 },
        },
        {
            trafficSignalNumber: 5,
            trafficSignalLocation: { ward: 8, area: "Thudiyalur", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 125, car: 70, bus: 15, truck: 10 },
            emergencyVehicleCrossedCount: { ambulance: 1, fireServiceVehicle: 1, vipVehicle: 0 },
        },
        {
            trafficSignalNumber: 6,
            trafficSignalLocation: { ward: 63, area: "Singanallur", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 260, car: 122, bus: 42, truck: 20 },
            emergencyVehicleCrossedCount: { ambulance: 2, fireServiceVehicle: 1, vipVehicle: 4 },
        },
        {
            trafficSignalNumber: 7,
            trafficSignalLocation: { ward: 81, area: "Ukkadam", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 300, car: 110, bus: 90, truck: 32 },
            emergencyVehicleCrossedCount: { ambulance: 4, fireServiceVehicle: 1, vipVehicle: 0 },
        },
        {
            trafficSignalNumber: 8,
            trafficSignalLocation: { ward: 37, area: "Vadavalli", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 138, car: 88, bus: 16, truck: 5 },
            emergencyVehicleCrossedCount: { ambulance: 2, fireServiceVehicle: 0, vipVehicle: 0 },
        },
        {
            trafficSignalNumber: 9,
            trafficSignalLocation: { ward: 52, area: "Ramanathapuram", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 210, car: 148, bus: 35, truck: 8 },
            emergencyVehicleCrossedCount: { ambulance: 2, fireServiceVehicle: 0, vipVehicle: 3 },
        },
        {
            trafficSignalNumber: 10,
            trafficSignalLocation: { ward: 70, area: "Town Hall", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 390, car: 128, bus: 65, truck: 15 },
            emergencyVehicleCrossedCount: { ambulance: 3, fireServiceVehicle: 1, vipVehicle: 0 },
        },
        {
            trafficSignalNumber: 11,
            trafficSignalLocation: { ward: 15, area: "Kalapatti", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 192, car: 98, bus: 18, truck: 13 },
            emergencyVehicleCrossedCount: { ambulance: 0, fireServiceVehicle: 0, vipVehicle: 3 },
        },
        {
            trafficSignalNumber: 12,
            trafficSignalLocation: { ward: 28, area: "Saibaba Colony", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 185, car: 135, bus: 28, truck: 4 },
            emergencyVehicleCrossedCount: { ambulance: 2, fireServiceVehicle: 1, vipVehicle: 0 },
        },
        {
            trafficSignalNumber: 13,
            trafficSignalLocation: { ward: 86, area: "Kuniyamuthur", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 172, car: 82, bus: 38, truck: 12 },
            emergencyVehicleCrossedCount: { ambulance: 1, fireServiceVehicle: 0, vipVehicle: 2 },
        },
        {
            trafficSignalNumber: 14,
            trafficSignalLocation: { ward: 5, area: "Kavundampalayam", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 118, car: 65, bus: 25, truck: 11 },
            emergencyVehicleCrossedCount: { ambulance: 2, fireServiceVehicle: 0, vipVehicle: 0 },
        },
        {
            trafficSignalNumber: 15,
            trafficSignalLocation: { ward: 92, area: "Kovaipudur", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 88, car: 52, bus: 8, truck: 1 },
            emergencyVehicleCrossedCount: { ambulance: 0, fireServiceVehicle: 0, vipVehicle: 0 },
        },
        {
            trafficSignalNumber: 16,
            trafficSignalLocation: { ward: 41, area: "Race Course", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 102, car: 195, bus: 6, truck: 0 },
            emergencyVehicleCrossedCount: { ambulance: 0, fireServiceVehicle: 0, vipVehicle: 5 },
        },
        {
            trafficSignalNumber: 17,
            trafficSignalLocation: { ward: 58, area: "Puliakulam", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 165, car: 85, bus: 20, truck: 5 },
            emergencyVehicleCrossedCount: { ambulance: 0, fireServiceVehicle: 1, vipVehicle: 1 },
        },
        {
            trafficSignalNumber: 18,
            trafficSignalLocation: { ward: 77, area: "Sundarapuram", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 218, car: 108, bus: 44, truck: 22 },
            emergencyVehicleCrossedCount: { ambulance: 3, fireServiceVehicle: 0, vipVehicle: 1 },
        },
        {
            trafficSignalNumber: 19,
            trafficSignalLocation: { ward: 22, area: "Vilankurichi", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 132, car: 90, bus: 18, truck: 6 },
            emergencyVehicleCrossedCount: { ambulance: 1, fireServiceVehicle: 0, vipVehicle: 1 },
        },
        {
            trafficSignalNumber: 20,
            trafficSignalLocation: { ward: 68, area: "Ondipudur", city: "Coimbatore", state: "Tamil Nadu" },
            vehicleCrossedCount: { bike: 250, car: 118, bus: 52, truck: 16 },
            emergencyVehicleCrossedCount: { ambulance: 2, fireServiceVehicle: 0, vipVehicle: 2 },
        },
    ],
];
