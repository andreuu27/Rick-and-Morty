import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

export interface Character {
  id: number;
  name: string;
  status: string;
}
@Injectable({
  providedIn: 'root'
})

export class FilterService {
  private _favoriteCharacters: BehaviorSubject<number[]>;
  private _characters: Character[];
  private _searchText: BehaviorSubject<string>;

  constructor(){
  this._favoriteCharacters = new BehaviorSubject<number[]>([]);  
  this._characters = [

    { id: 1, name: 'Rick Sanchez', status: 'Alive' },
    { id: 2, name: 'Morty Smith', status: 'Alive' },
    { id: 3, name: 'Summer Smith', status: 'Alive' },
    { id: 4, name: 'Beth Smith', status: 'Alive' },
    { id: 5, name: 'Birdperson', status: 'Dead' },
    { id: 6, name: 'Mr. Meeseeks', status: 'Dead' },
    { id: 7, name: 'Evil Morty', status: 'Alive' },
    { id: 8, name: 'Jerry Smith', status: 'Alive' },
    { id: 9, name: 'Squanchy', status: 'Alive' },
    { id: 10, name: 'Tammy Gueterman', status: 'Dead' },
    { id: 11, name: 'Jessica', status: 'Alive' },
    { id: 12, name: 'Mr. Poopybutthole', status: 'Alive' },
    { id: 13, name: 'Noob-Noob', status: 'Alive' },
    { id: 14, name: 'Unity', status: 'Alive' },
    { id: 15, name: 'Birdperson', status: 'Dead' },
    { id: 16, name: 'Mr. Meeseeks', status: 'Dead' },
    { id: 17, name: 'Evil Morty', status: 'Alive' },
    { id: 18, name: 'Jerry Smith', status: 'Alive' },
    { id: 19, name: 'Squanchy', status: 'Alive' },
    { id: 20, name: 'Tammy Gueterman', status: 'Dead' }
  ];

  this._searchText = new BehaviorSubject<string>('');

  }
get favoriteCharacters(): Observable<number[]> {
    return this._favoriteCharacters;
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

  toggleFavorite(characterId: number): void {
    const currentFavorites = this._favoriteCharacters.getValue();

    const index = currentFavorites.findIndex(
      (id: number) => id === characterId,
    );

    if (index === -1) {
      currentFavorites.push(characterId);
    } else {
      currentFavorites.splice(index, 1);
    }

    this._favoriteCharacters.next(currentFavorites);
  }
}
// Este servicio gestiona el filtrado y el estado de favoritos de los personajes.
// Utiliza BehaviorSubject para mantener un registro del estado actual de los caracteres favoritos y del texto de búsqueda.
// El observable filteredCharacters emite la lista de personajes basada en el texto de búsqueda actual.
// El método toggleFavorite actualiza la lista de caracteres favoritos cuando un carácter se marca como favorito o no favorito.
// La propiedad searchText permite establecer el texto de búsqueda, que actualizará automáticamente los caracteres filtrados.
// La propiedad favoriteCharacters devuelve un observable de la lista actual de IDs de personajes favoritos.