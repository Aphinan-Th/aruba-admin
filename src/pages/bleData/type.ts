// To parse this data:
//
//   import { Convert, Welcome } from "./file";
//
//   const welcome = Convert.toWelcome(json);

export interface Result {
    meta: Meta;
    reporter: Reporter;
    reported: Reported[];
    bleData?: BleData[];
}

export interface BleData {
    mac: string;
    frameType: string;
    data: string;
    rssi: number;
    addrType: string;
    apbMac: string;
}

export interface Meta {
    version: string;
    access_token: string;
    nbTopic: string;
}

export interface Reported {
    mac: string;
    deviceClass: DeviceClass[];
    lastSeen: string;
    bevent: Bevent;
    stats: Stats;
    companyIdentifier?: CompanyIdentifier[];
}

export interface Bevent {
    event: Event;
}

export enum Event {
    Update = "update",
}

export interface CompanyIdentifier {
    value: number;
    description: string;
}

export enum DeviceClass {
    Unclassified = "unclassified",
}

export interface Stats {
    frame_cnt: number;
}

export interface Reporter {
    name: string;
    mac: string;
    ipv4: string;
    hwType: string;
    swVersion: string;
    swBuild: string;
    time: string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toWelcome(json: string): Result {
        return JSON.parse(json);
    }

    public static welcomeToJson(value: Result): string {
        return JSON.stringify(value);
    }
}
