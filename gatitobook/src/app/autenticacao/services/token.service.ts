import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  retornarToken(): string {
    return localStorage.getItem(KEY) ?? '';
  }

  salvarToken(token: string): void {
    localStorage.setItem(KEY, token);
  }

  excluirToken(): void {
    localStorage.removeItem(KEY);
  }

  possuiToken(): boolean {
    return !!this.retornarToken();
  }
}
