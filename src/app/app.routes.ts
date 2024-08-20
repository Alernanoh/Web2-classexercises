import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'pokemons', component: PokemonListComponent},
    {path: 'acercade', component: AcercadeComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];
