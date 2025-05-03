import { Component } from '@angular/core';
import { RegistroService } from '../services/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  registros: any[] = []; // Tipagem explícita para evitar erros

  constructor(private registroService: RegistroService) {}

  async registrar() {
    try {
      await this.registroService.registrar(); // Assumindo que registrar é assíncrono
      this.registros = this.registroService.obterRegistros();
    } catch (error) {
      console.error('Erro ao registrar:', error);
    }
  }
}