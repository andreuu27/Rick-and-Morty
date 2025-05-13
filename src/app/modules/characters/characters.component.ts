import { CardComponent } from '../../shared/card/card.component';
import { CommonModule } from '@angular/common';
import { FilterService } from '../../core/services/filter/filter.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { map } from 'rxjs';

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
    this._filterService.filteredCharacters.subscribe({
      next: (characters: Character[]) => {
        this.filteredCharacters = characters;
      },
    });

    this._filterService.favoriteCharactersIds.subscribe({
      next: (favoriteIds: number []) => {
        this.favoriteCharacterIds = favoriteIds;
      },
    });
  }
    protected onFavoriteClick(character: Character): void {
     this._filterService.toggleFavorite(character.id);
    }
 }
