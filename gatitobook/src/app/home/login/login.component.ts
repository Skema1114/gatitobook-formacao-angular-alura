import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public usuario: string = '';
  public senha: string = '';
  public corBotao: string = 'blue';

  constructor(
    private authService: AutenticacaoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public logar(): void {
    this.authService.autenticar(this.usuario, this.senha).subscribe(
      () => {
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
