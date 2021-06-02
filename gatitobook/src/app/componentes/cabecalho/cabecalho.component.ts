import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/autenticacao/usuario/services/usuario.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent implements OnInit {
  user$ = this.usuarioService.retornarUsuario();

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.usuarioService.logout();
    this.router.navigateByUrl('');
  }
}
