import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favoriteRecipesSubject = new BehaviorSubject<any[]>([]);
  favoriteRecipes$ = this.favoriteRecipesSubject.asObservable();

  constructor() { }

  // self explanetory
  getFavoriteRecipes(): any[] {
    const storedFavorites = localStorage.getItem('favorite_recipes');
    if (storedFavorites) {
      return JSON.parse(storedFavorites);
    }
    return [];
  }

  updateFavoriteRecipes(updatedFavorites: any[]) {
    this.favoriteRecipesSubject.next(updatedFavorites);
  }
}
