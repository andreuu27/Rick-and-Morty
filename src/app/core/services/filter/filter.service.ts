import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FilterService {
  }
  private _characters: Character[];

  private _searchText: BehaviorSubject<string>;

  constructor(){
  this._searchText = new BehaviorSubject<string>(''); 

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
} 

get characters(): Character[] {
  return this._characters;
}
get searchText(): Subject<string> {
  return this._searchText;
}
set searchText(value: string) {
  this._searchText.next(value);
}

get filteredCharacters(): Observable<Character[]> {
  return this._searchText.pipe(
    map((searchText: string) => {
      const filteredCharacters = this._characters.filter(
        (character: Character) => {
          return character.name
            .toLowerCase()
            .includes(searchText.toLowerCase());
        },
      );

      return filteredCharacters;
    }),
  );
}
}