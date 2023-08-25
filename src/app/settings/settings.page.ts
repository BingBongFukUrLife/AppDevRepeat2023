import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites/favorites.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  buttonColor: string = 'primary';
  buttonText: string = 'Clear';

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit() {
  }

  clearFavorites() {
    this.buttonColor = 'success';
    localStorage.removeItem('favorite_recipes');
    this.favoritesService.updateFavoriteRecipes([]);
    console.log("Cleared favorites!");

    setTimeout(() => {
      this.buttonColor = 'primary';
    }, 1000);
  }
}
