import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})
export class PersonaRegistroComponent implements OnInit {

  persona: Persona = new Persona;

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    persona;
  }
  
  add(): void {
    alert('Se agrego nueva persona' + JSON.stringify(this.persona));
    this.personaService.post(this.persona);
  }

}
