import { Component, OnInit } from '@angular/core';
import { actorCreacionDTO } from '../actor';

@Component({
  selector: 'app-crear-actor',
  templateUrl: './crear-actor.component.html',
  styleUrls: ['./crear-actor.component.css'],
})
export class CrearActorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  estado = 0;

  guardarCambios(actor: actorCreacionDTO) {
    console.log(actor);
  }

  cambiarEstado() {
    if (this.estado == 0) {
      this.estado = 1;
    } else {
      this.estado = 0;
    }
  }
}
