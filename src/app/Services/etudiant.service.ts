import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private etudiantList: Array<any> = [];

  constructor() {
    this.etudiantList = [{ nom: 'CHOUGDALI', age: 41, ville: 'Temara' }];
  }

  getEtudiantData(): Promise<any[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...this.etudiantList]);
      }, 1000);
    });
  }

  ajouterEtudiantData(item: any): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.etudiantList.push(item);
        resolve();
      }, 500); // Simulate delay
    });
  }
}
