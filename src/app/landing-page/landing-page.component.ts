import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  peliculasEnCines: any;

  peliculasProximosEstrenos = [
    // {
    //   titulo: 'Avengers: Endgame',
    //   fechaLanzamiento: new Date(),
    //   precio: 1400.99,
    // },
    // {
    //   titulo: 'Inception',
    //   fechaLanzamiento: new Date('2016-11-14'),
    //   precio: 300.99,
    // },
    // {
    //   titulo: 'Rocky',
    //   fechaLanzamiento: new Date('2016-11-14'),
    //   precio: 300.99,
    // },
  ];

  constructor() {}

  ngOnInit(): void {
    this.peliculasEnCines = [
      {
        titulo: 'Spider-Man',
        fechaLanzamiento: new Date(),
        precio: 1400.99,
        poster: '/assets/SpiderMan.jpeg',
      },
      {
        titulo: 'Moana',
        fechaLanzamiento: new Date('2016-11-14'),
        precio: 300.99,
        poster: '/assets/Moana.jpeg',
      },
    ];
  }
}
