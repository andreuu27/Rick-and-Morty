import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Character } from '../../../modules/characters/models/character.model';

@Injectable({
  providedIn: 'root'
})

export class FilterService {
  private _favoriteCharactersIds: BehaviorSubject<number[]>;
  private _characters: Character[];
  private _searchText: BehaviorSubject<string>;

  constructor(private _http: HttpClient) {
  this._favoriteCharactersIds = new BehaviorSubject<number[]>([]);  
  this._characters = [];

  this._searchText = new BehaviorSubject<string>('');
  }
  
  get favoriteCharactersIds(): Observable<number[]> {
    return this._favoriteCharactersIds;

  }

  set searchText(value: string) {
    this._searchText.next(value);

  }

  get searchText(): Observable<string> {
    return this._searchText;

  }

  get filteredCharacters(): Observable<Character[]> {
    return this._searchText.pipe(
      map((searchText: string) => {
        return this._characters.filter((character) =>
          character.name.toLowerCase().includes(searchText.toLowerCase()),
        );
      }),
    );
  }

  get favoriteCharacters(): Observable<Character[]> {
    return this._favoriteCharactersIds.pipe(
      map((favoriteCharacterIds: number[]) => {
        const favoriteCharacters: Character[] = [];

        for (const character of this._characters) {
          if (favoriteCharacterIds.includes(character.id)) {
            favoriteCharacters.push(character);
          }
        }

        return favoriteCharacters;
      }),
    );
  }

  fetchCharacters(): Observable<Character[]> {
    return this._http.get<Character[]>("https://rickandmortyapi.com/api/character");
  }

  toggleFavorite(characterId: number): void {
    const currentFavorites = this._favoriteCharactersIds.getValue();

    const index = currentFavorites.findIndex(
      (id: number) => id === characterId,
    );

    if (index === -1) {
      currentFavorites.push(characterId);
    } else {
      currentFavorites.splice(index, 1);
    }

    this._favoriteCharactersIds.next(currentFavorites);
  }

  getCharacterById(id: number): Character | null {
    for (const character of this._characters) {
      if (character.id === id) {
        return character;
      }
    }
    return null;
   }
}

// Este servicio gestiona el filtrado y el estado de favoritos de los personajes.
// Utiliza BehaviorSubject para mantener un registro del estado actual de los caracteres favoritos y del texto de búsqueda.
// El observable filteredCharacters emite la lista de personajes basada en el texto de búsqueda actual.
// El método toggleFavorite actualiza la lista de caracteres favoritos cuando un carácter se marca como favorito o no favorito.
// La propiedad searchText permite establecer el texto de búsqueda, que actualizará automáticamente los caracteres filtrados.
// La propiedad favoriteCharacters devuelve un observable de la lista actual de IDs de personajes favoritos.