import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { CardComponent } from "./card/card.component";
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';

export interface Character {
  name: string;
  status: 'Alive' | 'Dead';
} 
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, CardComponent, CommonModule, SearchBarComponent],
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
  { name: 'Birdperson', status: 'Dead' }
];
}