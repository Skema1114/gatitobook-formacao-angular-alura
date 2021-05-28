import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  private baseUrl: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  autenticar(usuario: string, senha: string): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/user/login`, {
      userName: usuario,
      password: senha,
    });
  }
}
