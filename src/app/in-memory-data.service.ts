import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'El Ferras', points: 6 },
      { id: 12, name: 'Laura Bozzo', points: 3 },
      { id: 13, name: 'Dr. Simi', points: 0 },
      { id: 14, name: 'Chuacheneger', points: 7 },
      { id: 15, name: 'Pedrito Sola', points: 4 },
      { id: 16, name: 'Gobesponja', points: 0 },
      { id: 17, name: 'Hijo del papá', points: 1 },
      { id: 18, name: 'El Venganzas', points: 0 },
      { id: 19, name: 'Tío Ben', points: 2 },
      { id: 20, name: 'Marco Aurelio', points: 9 },
      { id: 21, name: 'Chica 13', points: 4 },
      { id: 22, name: 'Pati Chapoy', points: 1 },
      { id: 23, name: 'Master Chef', points: 1 },
      { id: 24, name: 'Shinji', points: 7 },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
