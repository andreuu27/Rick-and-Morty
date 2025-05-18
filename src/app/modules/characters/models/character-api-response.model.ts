import { Character } from './character.model';
// This is an interface, it is used to define the structure of the object.
// It is used to define the properties of the object.
// It is used to define the types of the properties of the object.
// It is used to define the object that is returned by the API.

export interface CharacterApiPageResponse{
info: {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};
results: Character[];
}

