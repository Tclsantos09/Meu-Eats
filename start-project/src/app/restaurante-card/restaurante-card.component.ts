import { Component, OnInit, Input } from '@angular/core';
import { RestaurantesService } from '../restaurantes.service';

@Component({
  selector: 'app-restaurante-card',
  templateUrl: './restaurante-card.component.html',
  styleUrls: ['./restaurante-card.component.css']
})
export class RestauranteCardComponent implements OnInit {

    @Input() id;
    @Input() name;
    @Input() category;
    @Input() deliveryEstimate;
    @Input() rating;
    @Input() imagePath;
  
  constructor(private restaurantes: RestaurantesService) { }

  ngOnInit() {
  }

  

}
