import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  // Doughnut
  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ], backgroundColor: ['#3FD97C','#419DD9','#4A86F8'], 
        hoverBackgroundColor:['#3FD97C','#419DD9','#4A86F8'], hoverBorderColor:['#3FD97C','#419DD9','#4A86F8'] },
      { data: [ 50, 150, 120 ] },
      { data: [ 250, 130, 70 ], backgroundColor: ['#48CFF8','#3FD97C','#4A86F8'], 
        hoverBackgroundColor:['#48CFF8','#3FD97C','#4A86F8'], hoverBorderColor:['#48CFF8','#3FD97C','#4A86F8'] }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
