import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  idCelular: string = '';
  registros: { idCelular: string; dataHora: string }[] = [];

  constructor(private dbService: DbService) {}

  ngOnInit(): void {
    this.carregarRegistros();
  }

  // Simula a captura do ID do celular
  capturarIdCelular(): void {
    this.idCelular = 'CEL-' + Math.floor(Math.random() * 10000); // ID simulado
  }

  // Grava o registro no IndexedDB
  async gravarRegistro(): Promise<void> {
    if (!this.idCelular) {
      alert('Capture o ID do celular primeiro.');
      return;
    }

    const dataHora = new Date().toLocaleString(); // Data/hora atual
    await this.dbService.salvarRegistro(this.idCelular, dataHora);
    alert('Registro salvo com sucesso!');
    this.carregarRegistros(); // Atualiza a lista de registros
  }

  // Carrega os registros do IndexedDB
  async carregarRegistros(): Promise<void> {
    this.registros = await this.dbService.obterRegistros();
  }
}