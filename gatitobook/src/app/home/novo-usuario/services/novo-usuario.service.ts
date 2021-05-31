import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { NovoUsuario } from '../models/novo-usuario';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  constructor(private http: HttpClient) {}

  public cadastrarNovoUsuario(
    novoUsuario: NovoUsuario
  ): Observable<NovoUsuario> {
    return this.http.post<NovoUsuario>(`${API}/user/signup`, novoUsuario);
  }

  public verificarUsuarioExistente(nomeUsuario: string): Observable<boolean> {
    return this.http.get<boolean>(`${API}/user/exists/${nomeUsuario}`);
  }
}
