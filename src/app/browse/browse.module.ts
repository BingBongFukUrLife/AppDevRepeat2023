import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { BrowsePage } from './browse.page';
import { BrowsePageRoutingModule } from './browse-routing.module';
import { HttpClientModule } from '@angular/common/http';
// import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [
    NgFor,
    CommonModule,
    FormsModule,
    IonicModule,
    BrowsePageRoutingModule,
    HttpClientModule,
    // ScrollingModule
  ],
  declarations: [
    BrowsePage
  ]
})

export class BrowsePageModule {}
