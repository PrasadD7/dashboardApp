import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }

  public dnutYear: number = 2008;
  public pieYear: number = 2008;

  getBarData(): any {
    return this.http.get("https://localhost:44313/api/Leads");
  }

  postBarData(data: any): any {
    return this.http.post("https://localhost:44313/api/Leads", data);
  }

  getDoughnutChartData(Year: number): any {
    return this.http.get("https://localhost:44313/api/Profits/" + Year);
  }

  postDoughnutChartData(data: any,Year:number): any {
    return this.http.post("https://localhost:44313/api/Profits/"+ Year, data);
  }

  getPieChartData(Year: number): any {
    return this.http.get("https://localhost:44313/api/Profits/MonthlyProfit/" + Year);
  }

  postPieChartData(data: any,Year:number): any {
    return this.http.post("https://localhost:44313/api/Profits/MonthlyProfit/"+Year, data);
  }

  getRadarChartData(): any {
    var data = [
      {
        Year: 2018,
        Q1: 455,
        Q2: 876,
        Q3: 653,
        Q4: 98
      }, {
        Year: 2019,
        Q1: 145,
        Q2: 376,
        Q3: 253,
        Q4: 452
      }
    ];
    return data;
  }
}
