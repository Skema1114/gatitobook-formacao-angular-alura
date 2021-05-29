import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public cadastrarNovoUsuario(
    novoUsuario: NovoUsuario
  ): Observable<NovoUsuario> {
    return this.http.post<NovoUsuario>(
      `${this.baseUrl}/user/signup`,
      novoUsuario
    );
  }

  public verificarUsuarioExistente(nomeUsuario: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseUrl}/user/exists/${nomeUsuario}`);
  }
}
