import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    let pokemons = [{
      id: 0,
      name: '',
      height: 0,
      weight: 0
    }]

    let abilities = [{
      id: 0,
      en_name: '',
      es_name: '',
      ja_name: ''
    }]

    // Array para relacionar los pokemones y sus habilidades
    let abilitiesPokemon = [{
      pokemonId: 0,
      abilitiesId: [0]
    }]

    //  Mostrar las habilidades más comunes (primeras 20)

    let abilitiesCount = [];

    abilities.forEach(el => {
      const obj = {
        id: el.id,
        count: 0
      };
      abilitiesCount.push(obj)
    })

    abilitiesPokemon.forEach(el => {
      el.abilitiesId.forEach(element => {
        abilitiesCount.forEach(abilitie => {
          if (abilitie.id === element) {
            abilitie.count++;
          }
        })
      })
    })

    abilitiesCount.sort(function (a, b) {
      return (a.count - b.count);
    });

    abilitiesCount.forEach((el, index) => {
      if ((abilitiesCount.length - index) >= 19) {
        console.log(el);
      }
    })

    //  Mostrar pokemon con habilidades comiencen por p en español

    abilities.forEach(el => {
      if (el.es_name.startsWith('p')) {
        console.log(el);
      }
    })

  }

}
