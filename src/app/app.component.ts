import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'front-end';

  ocultar = false;

  ngOnInit(): void {}

  duplicarNumero(valor: number): number {
    return valor * 2;
  }

  manejarRated(voto: number): void {
    alert(voto);
  }

  setTitle(event: Event) {
    if ((event.target as HTMLInputElement)?.value) {
      this.title = (event.target as HTMLInputElement)?.value;
    }
  }
}
