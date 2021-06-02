import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../../autenticacao/services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: string = '';
  senha: string = '';
  corBotao: string = 'blue';

  constructor(
    private authService: AutenticacaoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  logar(): void {
    this.authService.autenticar(this.usuario, this.senha).subscribe(
      (success) => {
        this.corBotao = 'blue';
        this.router.navigateByUrl('animais');
      },
      (error) => {
        this.corBotao = 'red';
        console.log(error);
      }
    );
  }
}
