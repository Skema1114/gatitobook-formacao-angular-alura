import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Animal } from '../models/animal';
import { AnimaisService } from '../services/animais.service';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.css'],
})
export class DetalheAnimalComponent implements OnInit {
  animalId!: number;
  animal$!: Observable<Animal>;

  constructor(
    private animaisService: AnimaisService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.animalId = this.activatedRoute.snapshot.params.animalId;
    this.animal$ = this.animaisService.buscaAnimalId(this.animalId);
  }

  curtirAnimal() {
    this.animaisService.curtirAnimal(this.animalId).subscribe((curtida) => {
      if (curtida) {
        this.animal$ = this.animaisService.buscaAnimalId(this.animalId);
      }
    });
  }

  excluirAnimal() {
    this.animaisService.excluirAnimal(this.animalId).subscribe(
      (success) => {
        this.router.navigateByUrl('animais');
      },

      (error) => console.log(error)
    );
  }
}
