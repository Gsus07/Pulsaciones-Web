import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})
export class PersonaRegistroComponent implements OnInit {

  persona: Persona;
  constructor(private personaService: PersonaService) { }

  ngOnInit(): {
    this.persona= new Persona();
  }
  add(){
    this.personaService.post(this.persona).subscribe(p => {
      if(p != null){
        alter('Persona creada');
        this.persona = p;
      }
    })
  }

  CalcularPulsacion() {
    if((this.persona.sexo == "F")){
      this.persona.pulsacion =  (220 - this.persona.edad) / 10;
    }
    else{
      this.persona.pulsacion = (210 - this.persona.edad) / 10;
    }
   
  }

}
