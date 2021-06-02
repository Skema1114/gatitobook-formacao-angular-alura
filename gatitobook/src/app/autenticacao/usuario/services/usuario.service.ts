import { Injectable } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { Usuario } from '../models/usuario';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuarioSubject = new BehaviorSubject<Usuario>({});

  constructor(private tokenService: TokenService) {
    if (this.tokenService.possuiToken()) {
      this.decodificarJwt();
    }
  }

  private decodificarJwt(): void {
    const token = this.tokenService.retornarToken();
    const usuario = jwtDecode(token.toString()) as Usuario;
    this.usuarioSubject.next(usuario);
  }

  retornarUsuario(): Observable<Usuario> {
    return this.usuarioSubject.asObservable();
  }

  salvarToken(token: string): void {
    this.tokenService.salvarToken(token);
    this.decodificarJwt();
  }

  logout(): void {
    this.tokenService.excluirToken();
    this.usuarioSubject.next({});
  }

  estaLogado(): boolean {
    return this.tokenService.possuiToken();
  }
}
