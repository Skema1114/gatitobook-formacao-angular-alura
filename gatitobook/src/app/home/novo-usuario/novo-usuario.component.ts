import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';

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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      fullName: [''],
      userName: [''],
      email: [''],
      password: [''],
    });
  }

  public cadastrar() {
    // ESSA LINHA SÓ ESTA FUNCIONANDO PORQUE A INTERFACE TEM OS MESMOS CAMPOS DO NOVO USUARIO, OS MESMOS CAMPOS DA API
    const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
    console.log(novoUsuario);
  }
}
