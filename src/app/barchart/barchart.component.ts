import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";
@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  constructor(private datasvc: DataService) { }
  public Year: number;
  barData: any = [];
  barChartLabels: any = [];
  barChartData: any = [
    { data: [], label: "Erlangen" },
    { data: [], label: "Bangalore" }
  ];

  public barChartType = "line";

  public barChartLegend = true;
  
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  ngOnInit(): void {
    console.log("bar init");
    
    this.datasvc.getBarData().subscribe(
      (data) => {
        this.barData = data;
        data.forEach(record => {
          this.barChartLabels.push(record.year);
          this.barChartData[0].data.push(record.departmentA);
          this.barChartData[1].data.push(record.departmentB);
        }); 
      },
      (error) => {
        console.log(error);
      });
  }
}
