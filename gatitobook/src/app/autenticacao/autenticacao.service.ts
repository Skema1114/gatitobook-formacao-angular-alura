import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  private baseUrl: string = 'http://localhost:3000';

  constructor(
    private httpClient: HttpClient,
    private usuarioService: UsuarioService
  ) {}

  public autenticar(
    usuario: string,
    senha: string
  ): Observable<HttpResponse<any>> {
    return this.httpClient
      .post(
        `${this.baseUrl}/user/login`,
        {
          userName: usuario,
          password: senha,
        },
        {
          observe: 'response',
        }
      )
      .pipe(
        tap((response) => {
          const authToken = response.headers.get('x-access-token') ?? '';
          console.log(authToken);
          this.usuarioService.salvarToken(authToken);
        })
      );
  }
}
