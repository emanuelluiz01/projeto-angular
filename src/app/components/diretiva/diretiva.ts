import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  standalone: false,
  templateUrl: './diretiva.html',
  styleUrl: './diretiva.css',
})
export class Diretiva {
  alunos = [
    { id: 1, nome: 'Aluno 1', ativo: true },
    { id: 2, nome: 'Aluno 2', ativo: false },
    { id: 3, nome: 'Aluno 3', ativo: true },
  ];

  mostrarLista = true;

  fontSize = 12;

  toggleLista() {
    this.mostrarLista = !this.mostrarLista;
  }

  aumentarFonte() {
    this.fontSize = this.fontSize + 2;
  }

  diminuirFonte() {
    this.fontSize = this.fontSize - 2;
  }
}
