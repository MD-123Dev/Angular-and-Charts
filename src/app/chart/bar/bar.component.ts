import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Chart } from 'chart.js'
import * as _ from 'lodash';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit, OnChanges {

  @Input('databar') data = [] //**value passer from compements chart grphics */
  
  constructor() { }

  ngOnChanges() {
     
    this.chart()
    
  }
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    
    this.chart()


  }

  chart() {
    let labels = _.map(this.data, 'label');
    let Quantiter = _.map(this.data, 'quantiter');
    var myChart = new Chart('myChart', {
      type: 'bar',
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
