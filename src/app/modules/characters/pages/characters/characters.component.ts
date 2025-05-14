import { CardComponent } from '../../../../shared/card/card.component';
import { CommonModule } from '@angular/common';
import { FilterService } from '../../../../core/services/filter/filter.service';
import { Component, OnInit } from '@angular/core';

interface Character {
  id: number;
  name: string;
  status: string;

}
@Component({
  selector: 'app-characters',
  imports: [CardComponent, CommonModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
})

export class CharactersComponent implements OnInit {
  protected filteredCharacters: Character[];
  protected favoriteCharacterIds: number[];
  protected favoriteCharacters: Character[];

  constructor(private _filterService: FilterService) {
    // Initialize filtered characters with all characters
    this.filteredCharacters = [];
    this.favoriteCharacterIds = [];
    this.favoriteCharacters = [];
  }

  ngOnInit(): void {
    this._filterService.fetchCharacters().subscribe({
      next: (characters: Character[]) => {
        console.log('Characters fetched:', characters);
      },
    }),

    this._filterService.filteredCharacters.subscribe({
      next: (characters: Character[]) => {
        this.filteredCharacters = characters;
      },
    });

    const characters: Character[] = [];

      this._filterService.favoriteCharactersIds.subscribe({
       next: (favoriteCharacterId: number []) => {
         for (const character of characters) {
           if (favoriteCharacterId.includes(character.id)) {
         this.favoriteCharacters.push(character);
        }
       }
      },
    });

    this._filterService.favoriteCharacters.subscribe({
      next: (favoriteCharacters: Character[]) => {
        this.favoriteCharacters = favoriteCharacters;
      },
    });
  }

  protected onFavoriteClick(character: Character): void {
    this._filterService.toggleFavorite(character.id);
  }
}