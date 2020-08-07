import { Component, OnInit, OnChanges } from '@angular/core';
import { Chart } from 'chart.js'
import * as _ from 'lodash';
@Component({
  selector: 'chartgraphics',
  templateUrl: './chartgraphics.component.html',
  styleUrls: ['./chartgraphics.component.css'],
})
export class ChartgraphicsComponent implements OnInit {
  constructor() {}

  produit = {
    label: '',
    quantiter: 0
  };

  produits = [
    {
      label: 'pC',
      quantiter: 150,
    },
    {
      label: 'Ram',
      quantiter: 125,
    },
  ];  




  ngOnInit(): void {
    
  }

  
  add() {
    this.produits = [this.produit, ...this.produits];
    
    this.produit = {
      label: '',
      quantiter: 0,
    }; 
  }


}
