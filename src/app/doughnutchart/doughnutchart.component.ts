import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { DataService } from "../services/data.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-doughnutchart',
  templateUrl: './doughnutchart.component.html',
  styleUrls: ['./doughnutchart.component.css']
})
export class DoughnutchartComponent implements OnInit {

  constructor(private datasvc:DataService, private router: Router) { }

  doughnutData: any = [];
  doughnutChartLabels: any = [];
  doughnutChartData: any = [];
  doughnutChartType = 'doughnut';
  doughnutChartColors: any[] = [{ backgroundColor: ["#007bff", "#6610f2", "#ffc107", "#28a745"] }];

  public year:number = 2008;
  @Output() public childEvent = new EventEmitter();

  ngOnInit(): void {
    this.loadData();
    for (let index = 1; index <= 4; index++) {
      this.doughnutChartLabels.push('Quarter' + index);
    }
  }

  loadData() {
    this.doughnutChartData = [];
    this.doughnutData = [];
    this.datasvc.getDoughnutChartData(this.year).subscribe(
      (data) => {
        this.doughnutData = data;
        this.doughnutChartData.push(data.quarter1);
        this.doughnutChartData.push(data.quarter2);
        this.doughnutChartData.push(data.quarter3);
        this.doughnutChartData.push(data.quarter4);
      });

    
  }

  fireEvent(){
    this.datasvc.dnutYear = this.year;
    this.loadData();
  }

  GetMonthlyProfits(year: number){
    this.router.navigate(['/piechart',year]);
  }

}
