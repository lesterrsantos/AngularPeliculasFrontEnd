import { Component, OnInit } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css'],
})
export class EditarPeliculaComponent implements OnInit {
  constructor() {}

  modelo: PeliculaDTO = {
    titulo: 'Spider-Man',
    trailer: 'abc',
    enCines: true,
    resumen: 'cosa',
    fechaLanzamiento: new Date(),
    poster: '/assets/SpiderImage.jpeg',
  };

  ngOnInit(): void {}

  guardarCambios(pelicula: PeliculaCreacionDTO) {
    console.log(pelicula);
  }
}
