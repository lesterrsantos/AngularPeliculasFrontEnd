import { Component, OnInit } from '@angular/core';
import { cineCreacionDTO, cineDTO } from '../cine';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css'],
})
export class EditarCineComponent implements OnInit {
  constructor() {}

  modelo: cineDTO = {
    nombre: 'Sambil',
    latitud: 18.48132363921789,
    longitud: -69.94411468505861,
  };

  ngOnInit(): void {}

  guardarCambios(cine: cineCreacionDTO) {
    console.log(cine);
  }
}
