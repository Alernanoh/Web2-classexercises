import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { Error404Component } from './pages/error404/error404.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { ListPostComponent } from './pages/list-post/list-post.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'pokemons', component: PokemonListComponent},
    {path: 'acercade', component: AcercadeComponent},
    {path: 'pokemon/:id', component: PokemonComponent},
    {path: 'post', component: ListPostComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: Error404Component},
];
