import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BirthComponent } from './birth/birth.component';

const routes: Routes = [
  // Ruta principal con parámetros
  { path: 'birthday/:name', component: BirthComponent },

  // Ruta predeterminada (puede redirigir a una página específica si lo deseas)
  { path: '**', redirectTo: 'birthday/YourName' }, //predefinir los textos
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
