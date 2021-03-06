import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { minusculoValidator } from './validators/minusculo.validator';
import { NovoUsuario } from './models/novo-usuario';
import { NovoUsuarioService } from './services/novo-usuario.service';
import { tamanhoMinimoValidator } from './validators/tamanho-minimo.validator';
import { UsuarioExisteService } from '../novo-usuario/services/usuario-existe.service';
import { usuarioSenhaIguaisValidator } from './validators/usuario-senha-iguais.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;
  corBotao: string = 'blue';

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private usuarioExistenteService: UsuarioExisteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group(
      {
        fullName: [
          '',
          [
            tamanhoMinimoValidator,
            Validators.required,
            Validators.minLength(3),
          ],
        ],
        userName: [
          '',
          [
            minusculoValidator,
            tamanhoMinimoValidator,
            Validators.required,
            Validators.minLength(3),
          ],
          [this.usuarioExistenteService.usuarioJaExite()],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            tamanhoMinimoValidator,
            Validators.required,
            Validators.minLength(3),
          ],
        ],
      },
      {
        validators: [usuarioSenhaIguaisValidator],
      }
    );
  }

  cadastrar() {
    if (this.novoUsuarioForm.valid) {
      // ESSA LINHA SÓ ESTA FUNCIONANDO PORQUE A INTERFACE TEM OS MESMOS CAMPOS DO NOVO USUARIO, OS MESMOS CAMPOS DA API
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
      this.novoUsuarioService.cadastrarNovoUsuario(novoUsuario).subscribe(
        (success) => {
          this.router.navigateByUrl('');
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
