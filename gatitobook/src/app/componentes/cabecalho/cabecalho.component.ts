import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent implements OnInit {
  // CIFRÃO NO FINAL É UMA CONVENÇÃO QUE INDICA QUE ESSA É UMA VARIAVEL É UM OBSERVABLE
  user$ = this.usuarioService.retornarUsuario();

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {}

  public logout() {
    this.usuarioService.logout();
    this.router.navigateByUrl('');
  }
}