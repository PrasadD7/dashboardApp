import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  constructor(private datasvc: DataService) { }

  pieData: any = [];

  pieChartLabels: any = [];
  pieChartType = 'polarArea';
  public pieChartData: any = [];
  public pieChartColors: any[] = [{ backgroundColor: ["#007bff", "#6610f2", "#ffc107", "#28a745", "crimson", "skyblue", "yellow", "magenta", "indigo", "cyan", "maroon", "lightgreen"] }];
  public year: number = 2008;
  ngOnInit(): void {
    this.pieChartLabels.push("January");
    this.pieChartLabels.push("February");
    this.pieChartLabels.push("March");
    this.pieChartLabels.push("April");
    this.pieChartLabels.push("May");
    this.pieChartLabels.push("June");
    this.pieChartLabels.push("July");
    this.pieChartLabels.push("August");
    this.pieChartLabels.push("September");
    this.pieChartLabels.push("October");
    this.pieChartLabels.push("November");
    this.pieChartLabels.push("December"); 
    this.loadData();
  }

  loadData() {
    this.pieChartData = [];
    this.datasvc.pieYear = this.year;
    this.datasvc.getPieChartData(this.year).subscribe(
      (data: any) => {
        this.pieChartData.push(data.january);
        this.pieChartData.push(data.february);
        this.pieChartData.push(data.march);
        this.pieChartData.push(data.april);
        this.pieChartData.push(data.may);
        this.pieChartData.push(data.june);
        this.pieChartData.push(data.july);
        this.pieChartData.push(data.august);
        this.pieChartData.push(data.september);
        this.pieChartData.push(data.october);
        this.pieChartData.push(data.november);
        this.pieChartData.push(data.december);
      });
  }

}
