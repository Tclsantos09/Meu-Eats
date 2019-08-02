import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { SobreComponent } from './sobre/sobre.component';
import { HttpClientModule } from '@angular/common/http';
import { RestauranteCardComponent } from './restaurante-card/restaurante-card.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    RestaurantesComponent,
    SobreComponent,
    RestauranteCardComponent,
    DetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
