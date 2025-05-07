import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { FilterService } from '../../core/services/filter/filter.service';
import { FormsModule } from '@angular/forms';


interface Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead';

}
  @Component({
  selector: 'app-characters',
  imports: [CommonModule, CardComponent, FormsModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})

export class CharactersComponent {
  protected characters: Character[] = [

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

  protected filteredCharacters: Character[] = [];

  constructor(private _filterService: FilterService) { 
    this.filteredCharacters = [...this.characters];

    this._filterService.searchText.subscribe({
      next: (value: string) => {
        const term = value.trim().toLowerCase();
        this.filteredCharacters = term 
          ? this.characters.filter(character =>
              character.name.toLowerCase().includes(term)
            )
          : [...this.characters];
      }
    });
  }
}