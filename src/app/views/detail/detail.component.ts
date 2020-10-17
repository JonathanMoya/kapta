import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PokemonService} from "../../services/pokemon.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private service: PokemonService
  ) {
  }

  pokemon = {
    name: '',
    weight: 0,
    height: 0,
    sprites: {
      front_default: ''
    }
  };
  abilities = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params.get("id"));
      this.service.getById("https://pokeapi.co/api/v2/pokemon/" + params.get("id")).subscribe(res => {
        this.abilities = [];
        console.log(res);
        this.pokemon = res;
        res.abilities.forEach(el => {
          // if (!el.is_hidden) {
          console.log(el);
          this.service.getAbilityData(el.ability.url).subscribe(resp => {
            console.log(resp);
            const obj = {
              name: resp.name,
              pokemon: resp.pokemon
            }
            console.log(obj)
            this.abilities.push(obj);
          })
          // }
        })
      })
    })
  }

}
