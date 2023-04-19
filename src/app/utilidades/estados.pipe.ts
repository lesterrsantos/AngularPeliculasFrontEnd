import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estados',
})
export class EstadosPipe implements PipeTransform {
  //Los pipes se llaman con |
  //Los pipes transforman la salida html de una variable pero no cambian el valor de dicha variable
  // transforma un valor numerico a un valor string que representa un estado
  // 0 es pendiente
  // 1 es registrado
  transform(value: unknown, ...args: unknown[]): unknown {
    const text = value === 0 ? 'PENDIENTE' : 'REGISTRADO';
    return text;
  }
}
