import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  constructor(
    private service: PokemonService,
    private router: Router
  ) {
  }

  pokemons = [];
  data = [];
  actualFiltering = 'characters';
  inputFilter = '';

  ngOnInit(): void {
    this.service.getAll().subscribe(res => {
      console.log(res);
      this.data = res.results;
      res.results.forEach((el, index) => {
        if (index < 20) {
          this.service.getById(el.url).subscribe(resp => {
            console.log(resp);
            this.pokemons.push(resp);
          });
        }
      })
    })
  }

  filterChange() {
    // console.log(event.target.value);
    let name = this.inputFilter.toLowerCase();
    if (name !== '') {
      this.pokemons = [];
      if (this.actualFiltering === 'characters') {
        console.log(this.data);
        this.data.forEach(el => {
          if (el.name.startsWith(name)) {
            this.service.getById(el.url).subscribe(resp => {
              if (this.pokemons.length < 20) {
                this.pokemons.push(resp);
              }
            });
          }
        })
      } else {
        console.log('entra');
        this.data.forEach(el => {
          if (el.name === name) {
            console.log('numero', el.url.split('https://pokeapi.co/api/v2/pokemon/')[1].split('/')[0]);
            const number = (el.url.split('https://pokeapi.co/api/v2/pokemon/')[1].split('/')[0]) - 1;
            for (let i = 0; i < 3; i++) {
              this.service.getById('https://pokeapi.co/api/v2/pokemon/' + (number + i)).subscribe(resp => {
                console.log(resp.id);
                this.pokemons.push(resp);
              });
            }
          }
        })
      }
    } else {
      this.data.forEach((el, index) => {
        if (index < 20) {
          this.service.getById(el.url).subscribe(resp => {
            this.pokemons.push(resp);
          });
        }
      })
    }
  }

  goTo(id) {
    console.log(id);
    this.router.navigate(['/detail/' + id]);
  }

}
