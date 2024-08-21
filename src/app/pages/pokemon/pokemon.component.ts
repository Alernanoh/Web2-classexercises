import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../utils/pokemon';
import * as pokemonData from '../../../../public/json/pokemonData.json';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  id: number = 0;
  pokemon?: Pokemon;

  constructor( private route: ActivatedRoute){ }

  ngOnInit(): void{
    this.route.paramMap.subscribe(
      (params) => {
        this.id = Number(params.get("id"));
        console.log(this.id);
      }
    );
    this.pokemon = ((pokemonData as any).default as Pokemon[])
    .find((pokemon)=> pokemon.id === this.id)!;
  }

}
