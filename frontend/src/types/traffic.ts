// Shared types mirroring the backend data structure

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

export interface TrafficPayload {
    timestamp: string;
    batchIndex: number;
    totalBatches: number;
    signals: TrafficSignalData[];
}
