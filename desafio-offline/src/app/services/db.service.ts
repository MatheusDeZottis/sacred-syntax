import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  private dbName = 'CelularDB';
  private storeName = 'Registros';

  constructor() {}

  // Abre ou cria o banco de dados
  private async openDB(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, 1);

      request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains(this.storeName)) {
          db.createObjectStore(this.storeName, { keyPath: 'id', autoIncrement: true });
        }
      };

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  // Salva um registro no IndexedDB
  async salvarRegistro(idCelular: string, dataHora: string): Promise<void> {
    const db = await this.openDB();
    const transaction = db.transaction(this.storeName, 'readwrite');
    const store = transaction.objectStore(this.storeName);

    return new Promise((resolve, reject) => {
      const request = store.add({ idCelular, dataHora });
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  // Recupera todos os registros do IndexedDB
  async obterRegistros(): Promise<{ idCelular: string; dataHora: string }[]> {
    const db = await this.openDB();
    const transaction = db.transaction(this.storeName, 'readonly');
    const store = transaction.objectStore(this.storeName);

    return new Promise((resolve, reject) => {
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }
}