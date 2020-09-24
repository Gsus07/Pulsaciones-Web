import { PersonaRegistroComponent } from './pulsacion/persona-registro/persona-registro.component';
import { PersonaConsultarComponent } from './pulsacion/persona-consultar/persona-consultar.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
  path: 'personaConsulta',
  component: PersonaConsultarComponent
  },
  {
    path: 'personaRegistro',
    component: PersonaRegistroComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
