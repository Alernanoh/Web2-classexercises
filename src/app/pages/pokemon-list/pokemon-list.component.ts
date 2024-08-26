import { Component } from '@angular/core';
import { Pokemon } from '../../utils/pokemon';
import * as pokemonData from '../../../../public/json/pokemonData.json';
import { CommonModule} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {

  pokemons: Pokemon[] = (pokemonData as any).default;

  constructor ( private router: Router){ }

  ngOnInit(): void{

  }

  onClickButton(): void{
    console.log(this.pokemons);
  }

  onClickTable(pokemon: Pokemon): void{
    this.router.navigate(['/pokemon', pokemon.id]);

  }

}
