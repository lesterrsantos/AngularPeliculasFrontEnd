import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-autocomplete-actores',
  templateUrl: './autocomplete-actores.component.html',
  styleUrls: ['./autocomplete-actores.component.css'],
})
export class AutocompleteActoresComponent implements OnInit {
  constructor() {}

  control: FormControl = new FormControl();

  actores = [
    { nombre: 'Tom Holland', foto: '/assets/TomHolland.jpeg' },
    { nombre: 'Tom Hanks', foto: '/assets/TomHanks.jpeg' },
    { nombre: 'Samuel L. Jackson', foto: '/assets/Samuel.jpeg' },
  ];

  actoresOriginal = this.actores;

  actoresSeleccionados: any = [];

  ngOnInit(): void {
    this.control.valueChanges.subscribe((valor) => {
      this.actores = this.actoresOriginal;
      this.actores = this.actores.filter(
        (actor) => actor.nombre.indexOf(valor) !== -1
      );
    });
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    console.log(event.option.value);
    this.actoresSeleccionados.push(event.option.value);
    this.control.patchValue('');
  }
}
