import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private _searchText: Subject<string>;

  constructor() {
    this._searchText = new Subject<string>();
  }
  set searchText(value: string) {
    this._searchText.next(value);
  }
  get searchText(): Subject<string> {
    return this._searchText;
  }
}
