import { Component } from "@angular/core";
import { ExcelService } from "./services/excel.service";
import { DataService } from "./services/data.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title="prasad";
  
  radarChartType = 'radar';
  dnutYear : number = 2008;
  radarChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  public radarChartData = [
    { data: [], label: '' },
    { data: [], label: '' }
  ];
  constructor(private datasvc: DataService, private excelsvc: ExcelService) { }

  ngOnInit() {  }

  exportData(): any {

    this.datasvc.getBarData().subscribe(
      (data)=>{
        console.log(data);  
        // this.excelsvc.exportAsExcelFile(data, 'BarChartOrg');
        this.datasvc.postBarData(data).subscribe(
          (data)=>{
            alert("Bar data saved successfully");
          },
          (err)=>{
            console.log(err);
            alert("Bar data could not be saved!");
          });
      });

    var dnutdata : any = [];

    this.datasvc.getDoughnutChartData(this.datasvc.dnutYear).subscribe(
      (data)=>{
        //dnutdata.push(data);
        console.log(data);        
        // this.excelsvc.exportAsExcelFile(dnutdata, 'DoughnutChartOrg');
        this.datasvc.postDoughnutChartData(data,this.datasvc.dnutYear).subscribe(
          (data)=>{
            alert("Doughnut chart data saved successfully");
          },
          (err)=>{
            console.log(err);
            alert("Doughnut chart data could not be saved!");
          });
      });

      var piedata:any = [];
    this.datasvc.getPieChartData(this.datasvc.pieYear).subscribe(
      (data)=>{
        //piedata.push(data);    
        // this.excelsvc.exportAsExcelFile(piedata,'PieChartOrg');
        this.datasvc.postPieChartData(data,this.datasvc.pieYear).subscribe(
          (data)=>{
            alert("Pie chart data saved successfully");
          },
          (err)=>{
            console.log(err);            
            alert("Pie chart data could not be saved!");
          });
      },
      (error)=>{
        alert(error);
      });

  }
  
  //   public radarChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  //   public radarChartData = [
  //     {data: [120, 130, 180, 70], label: '2017'},
  //     {data: [90, 150, 200, 45], label: '2018'}
  //   ];

  //  public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  //   public pieChartData = [120, 150, 180, 90];
  //   public pieChartType = 'pie';


  //  public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  //  public doughnutChartData = [120, 150, 180, 90];

}
