import { Injectable } from '@angular/core';
import { DeviceService } from './device.service';

@Injectable({
  providedIn: 'root',
})
export class RegistroService {
  private registros: { id: string; dataHora: string }[] = [];

  constructor(private deviceService: DeviceService) {}

  registrar() {
    const novoRegistro = {
      id: this.deviceService.getDeviceId(),
      dataHora: new Date().toISOString(),
    };

    this.registros.push(novoRegistro);
  }

  obterRegistros() {
    return this.registros;
  }
}
