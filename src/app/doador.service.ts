import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Modelo de Doador de Sangue
export interface Doador {
  id: number;
  nome: string;
  idade: number;
  sexo: string;
  tipoSanguineo: string;
  telefone: string;
  
  
}

@Injectable({
  providedIn: 'root'
})
export class DoadorService {
  private doadores: Doador[] = [];
  private doadoresSubject = new BehaviorSubject<Doador[]>(this.doadores);

  constructor() {
    // Dados simulados, normalmente você faria uma requisição HTTP para obter esses dados
    this.doadores = [
      { id: 1, nome: 'Bernardo França', idade: 20, sexo: "Masculino", tipoSanguineo: 'O+', telefone: "(81) 98585-4569" },
      { id: 2, nome: 'Helena Vitória', idade: 22, sexo: "Feminino", tipoSanguineo: 'B+', telefone: "(85) 98563-4789" },
    ];
    this.doadoresSubject.next(this.doadores);
  }

  // Retorna um Observable com a lista de doadores
  getDoadores() {
    return this.doadoresSubject.asObservable();
  }

  // Adiciona um novo doador
  addDoador(doador: Doador) {
    doador.id = this.doadores.length + 1; // Simulando a geração de um ID único
    this.doadores.push(doador);
    this.doadoresSubject.next(this.doadores);
  }

  // Atualiza os dados de um doador
  updateDoador(updatedDoador: Doador) {
    const index = this.doadores.findIndex(d => d.id === updatedDoador.id);
    if (index !== -1) {
      this.doadores[index] = updatedDoador;
      this.doadoresSubject.next(this.doadores);
    }
  }

  // Remove um doador
  deleteDoador(id: number) {
    this.doadores = this.doadores.filter(d => d.id !== id);
    this.doadoresSubject.next(this.doadores);
  }
}
