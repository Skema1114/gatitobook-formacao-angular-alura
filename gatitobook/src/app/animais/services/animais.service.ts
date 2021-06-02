import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, mapTo } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TokenService } from '../../autenticacao/services/token.service';
import { Animais, Animal } from '../models/animal';

const API = environment.apiUrl;
const NOT_MODIFIED = '304';

@Injectable({
  providedIn: 'root',
})
export class AnimaisService {
  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}

  ListarAnimaisUsuario(nomeDoUsuario: string): Observable<Animais> {
    return this.httpClient.get<Animais>(`${API}/${nomeDoUsuario}/photos`);
  }

  buscaAnimalId(id: number): Observable<Animal> {
    return this.httpClient.get<Animal>(`${API}/photos/${id}`);
  }

  excluirAnimal(id: number): Observable<Animal> {
    return this.httpClient.delete<Animal>(`${API}/photos/${id}`);
  }

  curtirAnimal(id: number): Observable<boolean> {
    return this.httpClient
      .post<Animal>(`${API}/photos/${id}/like`, {}, { observe: 'response' })
      .pipe(
        mapTo(true),
        catchError((error) => {
          return error.status === NOT_MODIFIED ? of(false) : throwError(error);
        })
      );
  }

  uploadFotoAnimal(
    descricao: string,
    permitirComentarios: boolean,
    arquivo: File
  ) {
    const formData = new FormData();
    formData.append('description', descricao);
    formData.append('allowComments', permitirComentarios ? 'true' : 'false');
    formData.append('imageFile', arquivo);

    return this.httpClient.post(`${API}/photos/upload`, formData, {
      observe: 'events',
      reportProgress: true,
    });
  }
}
