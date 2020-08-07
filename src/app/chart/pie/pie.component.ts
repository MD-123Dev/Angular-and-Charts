import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Chart } from 'chart.js';
import * as _ from 'lodash';
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit, OnChanges {

  @Input('dataPie') data = [] 
 
  constructor() { }

  ngOnChanges() {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.chart3();
  }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {

    this.chart3()

  }

  chart3() {
    let labels = _.map(this.data, 'label');
    let Quantiter = _.map(this.data, 'quantiter');
    var myChart = new Chart('myChart3', {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [
          {
            label: '# of Votes',
            data: Quantiter,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }

}
