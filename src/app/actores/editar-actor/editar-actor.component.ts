import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css'],
})
export class EditarActorComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  modelo: actorCreacionDTO = {
    nombre: 'Felipe',
    fechaNacimiento: new Date(),
    foto: ''
  };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      // Obtener el campo id de la URL
      // alert(params['id']);
    });
  }

  guardarCambios(actor: actorCreacionDTO) {
    console.log(actor);
  }
}
