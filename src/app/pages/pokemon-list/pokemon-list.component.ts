import { Component } from '@angular/core';
import { Pokemon } from '../../utils/pokemon';
import * as pokemonData from '../../../../public/json/pokemonData.json';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {

  pokemons: Pokemon[] = (pokemonData as any).default;
}
