import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorCreacionDTO } from '../actor';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.css'],
})
export class FormularioActoresComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  form: FormGroup = this.formBuilder.group({
    nombre: [
      '',
      {
        validators: [Validators.required],
      },
    ],
    fechaNacimiento: '',
    foto: '',
    biografia: '',
  });

  @Input()
  modelo: actorCreacionDTO = {
    nombre: '',
    fechaNacimiento: new Date(),
    foto: '',
  };

  @Output()
  OnSubmit: EventEmitter<actorCreacionDTO> = new EventEmitter<actorCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      fechaNacimiento: '',
      foto: '',
      biografia: '',
    });

    //Llenar el formulario a partir del modelo(actor)
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  // Emitir hacia el componente padre el formulario de actores
  onSubmit() {
    this.OnSubmit.emit(this.form.value);
  }

  archivoSeleccionado(file: any) {
    this.form.get('foto')?.setValue(file);
  }

  cambioMarkdown(texto: string) {
    this.form.get('biografia')?.setValue(texto);
  }
}
