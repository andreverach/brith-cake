import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  // Ruta principal con parámetros
  { path: 'birthday', component: AppComponent },

  // Ruta predeterminada (puede redirigir a una página específica si lo deseas)
  { path: '**', redirectTo: 'birthday' }, //predefinir los textos
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
