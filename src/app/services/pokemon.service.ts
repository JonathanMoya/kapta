import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<any>(`${this.apiUrl}/pokemon?limit=1500`);
  }

  getById(url) {
    return this.http.get<any>(url);
  }

  getAbilityData(url) {
    return this.http.get<any>(url);
  }
}
