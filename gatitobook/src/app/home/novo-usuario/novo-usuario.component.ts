import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { minusculoValidator } from './validator/minusculo.validator';
import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';
import { tamanhoMinimoValidator } from './validator/tamanho-minimo.validator';
import { UsuarioExisteService } from './usuario-existe.service';
import { usuarioSenhaIguaisValidator } from './validator/usuario-senha-iguais.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  public novoUsuarioForm!: FormGroup;
  public corBotao: string = 'blue';

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

  public cadastrar() {
    if (this.novoUsuarioForm.valid) {
      // ESSA LINHA SÓ ESTA FUNCIONANDO PORQUE A INTERFACE TEM OS MESMOS CAMPOS DO NOVO USUARIO, OS MESMOS CAMPOS DA API
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
      this.novoUsuarioService.cadastraNovoUsuario(novoUsuario).subscribe(
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
