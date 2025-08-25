import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: false,
  templateUrl: './contador.html',
  styleUrl: './contador.css',
})
export class Contador {
  numeroInicial: number = 0;

  incrementador() {
    this.numeroInicial++;
  }

  decrementador() {
    if (this.numeroInicial > 0) {
      this.numeroInicial--;
    }
  }
}
