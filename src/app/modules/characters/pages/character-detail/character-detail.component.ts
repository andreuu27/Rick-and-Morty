import { Component, Input, OnInit } from '@angular/core'; 
import { Character, FilterService } from '../../../../core/services/filter/filter.service';

@Component({
  selector: 'app-character-detail',
  imports: [],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.css'
})
export class CharacterDetailComponent  implements OnInit {
  @Input() id: string;

  protected character: Character | null;
  // This is a property, it is used to store the character object.
  // It is initialized to null.
  // It is used to store the character object that is returned by the filter service.

  constructor(private _filterService: FilterService) {
    this.id = '';
    this.character = null;
    // This is a constructor, it is used to initialize the component.
    // It is called before the component is created.
    // It is used to inject services and initialize properties.
    // It is not used to initialize the component.
    
  }

  ngOnInit(): void {
    const parsedId = parseInt(this.id);
    
    if(typeof parsedId === 'number') {
      // I have a valid id.
      // Call filter service to get the character by id.
     this._filterService.getCharacterById(parsedId);
    }else {
      // I have an invalid id.
    }
  }

  // This is a lifecycle hook, it is called after the component is created.
  // It is used to initialize the component.
  // It is used to get the character object from the filter service.
  // It is used to get the character object by id.

 protected printId(): void {
    console.log(this.id);
  }
}
