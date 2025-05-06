import { Component } from '@angular/core';
import { HeaderComponent } from "./shared/header/header.component";
import { CardComponent } from "./shared/card/card.component";
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

export interface Character {
  name: string;
  status: 'Alive' | 'Dead';
} 
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, CardComponent, CommonModule, SearchBarComponent, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rick-and-morty';

characters: Character[] = [
  { name: 'Rick Sanchez', status: 'Alive' },
  { name: 'Morty Smith', status: 'Alive' },
  { name: 'Summer Smith', status: 'Alive' },
  { name: 'Beth Smith', status: 'Alive' },
  { name: 'Birdperson', status: 'Dead' },
  { name: 'Mr. Meeseeks', status: 'Dead' },
  { name: 'Evil Morty', status: 'Alive' },
  { name: 'Jerry Smith', status: 'Alive' },
  { name: 'Squanchy', status: 'Alive' },
  { name: 'Tammy Gueterman', status: 'Dead' },
  { name: 'Jessica', status: 'Alive' },
  { name: 'Mr. Poopybutthole', status: 'Alive' },
  { name: 'Noob-Noob', status: 'Alive' },
  { name: 'Unity', status: 'Alive' },
  { name: 'Birdperson', status: 'Dead' },
  { name: 'Mr. Meeseeks', status: 'Dead' },
  { name: 'Evil Morty', status: 'Alive' },
];

}
