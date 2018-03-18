import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonService } from './services/common.service';

import { AppComponent } from './app.component';
import { MoviesComponent } from './frame/movies/movies.component';
import { MovieComponent } from './frame/movies/movie/movie.component';
import { HeaderComponent } from './frame/shared/header/header.component';
import { FooterComponent } from './frame/shared/footer/footer.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviesearchComponent } from './frame/movies/moviesearch/moviesearch.component';
import { MoviesingleComponent } from './frame/movies/movie/moviesingle/moviesingle.component';
import { MovFavComponent } from './frame/mov-fav/mov-fav.component';
import { MovFavViewComponent } from './frame/mov-fav/mov-fav-view/mov-fav-view.component';


const routes :Routes = [
  {path: '', redirectTo:'/moviesearch',pathMatch:'full'},
  {path: 'movies', component:MoviesComponent},
  {path: 'moviesearch', component:MoviesearchComponent},
  {path: 'mov-fav',component:MovFavComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    HeaderComponent,
    FooterComponent,
    MoviesearchComponent,
    MoviesingleComponent,
    MovFavComponent,
    MovFavViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
