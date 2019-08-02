import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { DetalhesComponent } from './detalhes/detalhes.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'restaurantes', component: RestaurantesComponent},
  {path: 'detalhes/:id', component: DetalhesComponent},
  {path: 'sobre', component: SobreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
