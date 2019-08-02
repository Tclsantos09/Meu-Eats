import { Component, OnInit } from '@angular/core';
import { RestaurantesService } from '../restaurantes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

  constructor(private restaurantes: RestaurantesService,
    private route: ActivatedRoute) { }

  dados;
  ngOnInit() {
    let id = this.route.snapshot.params['id'];
  }

  public leiaDoRestaurante(){
    this.restaurantes.getRestaurantes().subscribe((d) => this.dados = d );
    return this.dados;
  }

}
