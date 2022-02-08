import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent {

  chartLabels: string[] = ['2020', '2021', '2022', '2023', '2024', '2025', '2026'];

  @Input() barChartData: ChartData<'bar'> = {
    labels: this.chartLabels,
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#A76FF0', hoverBackgroundColor: '#A76FF0' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
    ]
  };

}
