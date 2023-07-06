import { Injectable } from '@angular/core';
import { generoDTO } from './genero';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GenerosService {
  constructor(private http: HttpClient) {}

  private apiURL = environment.apiURL;

  public obtenerTodos(): Observable<generoDTO[]> {
    return this.http.get<generoDTO[]>(this.apiURL);
  }
}
