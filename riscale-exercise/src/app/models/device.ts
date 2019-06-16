import { HostStatus } from './host-status.enum';
import { OsType } from './os-type.enum';

export interface Device {
  id: number;
  host: string;
  ip: string;
  osType: OsType;
  osName: string;
  status: HostStatus;
  lastSeen: Date;
}
