import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() headerTitle: string;
  @Input() footerText: string;
  @Input() isFavorite: boolean;

  @Output() favoriteClick: EventEmitter<void>;

  constructor() {
    this.headerTitle = 'Default Header';
    this.footerText = 'Default Footer';
    this.isFavorite = false;

    this.favoriteClick = new EventEmitter<void>();
  }

  onFavoriteClick(): void {
    this.favoriteClick.emit();
  }
}
