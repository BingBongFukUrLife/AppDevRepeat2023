import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavoritesService } from './favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private favoritesService: FavoritesService
    ) { }

  favorites: any[] = [];

  // function for checking if favorited
  isFavorite(recipe: any): boolean {
    return this.favorites.some((fav) => fav.title == recipe.title);
  }

  ngOnInit() {
    this.favoritesService.favoriteRecipes$.subscribe(updatedFavorites => {
      this.favorites = updatedFavorites;
    });

    this.favorites = this.favoritesService.getFavoriteRecipes();
  }

}
