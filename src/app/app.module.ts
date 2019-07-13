import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameNewComponent } from './game-new/game-new.component';
import { GameEditComponent } from './game-edit/game-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import {  
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    GameDetailComponent,
    GameNewComponent,
    GameEditComponent,
    MenuComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,  
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule, 
    MatSelectModule,
    MatSidenavModule,  
    MatTableModule,
    MatToolbarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
