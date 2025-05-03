import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  private deviceId: string;

  constructor() {
    this.deviceId = this.generateDeviceId();
  }

  private generateDeviceId(): string {
    return 'device-' + Math.random().toString(36).substring(2, 15);
  }

  getDeviceId(): string {
    return this.deviceId;
  }
}
