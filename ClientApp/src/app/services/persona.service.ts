import { Injectable } from '@angular/core';
import { Persona } from './../pulsacion/models/persona';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor() { }

  get(): Observable<Persona[]> {
    return of(JSON.parse(localStorage.getItem('datos')));

  }
  post(persona: Persona){
    let personas: Persona[]= [];
    if(this.get()!= null){
      personas = this.get();
    }
    personas.push(persona);
    localStorage.setItem('datos',JSON.stringify(personas));
  }
}
