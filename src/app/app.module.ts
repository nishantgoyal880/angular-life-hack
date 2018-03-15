import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { MoviesComponent } from './frame/movies/movies.component';
import { MovieComponent } from './frame/movies/movie/movie.component';
import { HeaderComponent } from './frame/shared/header/header.component';
import { FooterComponent } from './frame/shared/footer/footer.component';
import { SearchComponent } from './frame/shared/search/search.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes :Routes = [
  {path: '', redirectTo:'/search',pathMatch:'full'},
  {path: 'movies', component:MoviesComponent},
  {path: 'search', component:SearchComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    SearchComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
