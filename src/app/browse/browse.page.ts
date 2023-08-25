import { Component, OnInit } from '@angular/core';
import { NavController, RefresherCustomEvent } from '@ionic/angular';
import { ChatgptService } from '../chatgpt.service';
// import { Storage } from '@ionic/storage-angular';
import { FavoritesService } from '../favorites/favorites.service';

@Component({
  selector: 'app-browse',
  templateUrl: 'browse.page.html',
  styleUrls: ['browse.page.scss'],
  standalone: false,
  providers: [ChatgptService]
})

export class BrowsePage implements OnInit {
  constructor(
    private ChatGPT: ChatgptService,
    private NavCtrl: NavController,
    private favoritesService: FavoritesService
    // private storage: Storage
  ) {}

  generated: any[] = [];
  favorites: any[] = [];

  ngOnInit(): void {
    this.expand();
  }

  // event for when user scrolls to the bottom
  scrolled(event: Event) {
    let promise = this._expand();
    promise.then(() => {
      (event as RefresherCustomEvent).target.complete();
    })
  }

  // functions for adding / checking a recipe to / in favorites
  favorite(recipe: any) {
    if (this.isFavorite(recipe)) {
      this.favorites = this.favorites.filter((favRecipe) => favRecipe.title !== recipe.title);
    } else {
      this.favorites.push(recipe);
    }

    localStorage.setItem('favorite_recipes', JSON.stringify(this.favorites));

    this.favoritesService.updateFavoriteRecipes(this.favorites);

    this.NavCtrl.navigateForward('/favorites', {
      state: { favorites: this.favorites }
    })
  }

  isFavorite(recipe: any): boolean {
    return this.favorites.some((fav) => fav.title == recipe.title);
  }

  // functions for expanding the recipes
  private _expand(): Promise<boolean> {
    return new Promise(async (resolve) => {
      this.expand();
      resolve(true);
    });
  }

  private expand() {
    try {
      this.ChatGPT.Generate().subscribe((recipe) => {
            let lines = recipe.choices[0].message.content.split('\n');
            let title = lines[0];

            lines.splice(0, 2);

            let formatted = {
              title: title,
              text: lines.join('\n'),
              time: new Date(recipe.created * 1000).toLocaleString()
            };

            this.generated.push(formatted);

            while (this.generated.length > 20)
            {
              this.generated.shift();
            }
        }
      );
    } catch(error) {
      console.warn(error);
    }
  }
}
