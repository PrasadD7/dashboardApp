import { Injectable } from "@angular/core";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
const EXCEL_TYPE =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const EXCEL_EXTENSION = ".xlsx";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

@Injectable()
export class ExcelService {
  constructor(private http: HttpClient) { }

  public exportAsExcelFile(json: any[], excelFileName: string): void {

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = {
      Sheets: { data: worksheet },
      SheetNames: ["data"]
    };
    const excelBuffer: any = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array"
    });
    console.log(json);
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }
  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    // FileSaver.saveAs(
    //   data,
    //   fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
    // );
    let headers = new HttpHeaders();
    //this is the important step. You need to set content type as null
    headers.set('Content-Type', null);
    headers.set('Accept', "multipart/form-data");
    
    const formData: FormData = new FormData();
    formData.append("files", data, fileName);
  
    this.http.post("https://localhost:44313/api/ImageUpload", formData.get("files")).subscribe(
      (data: any) => {
        alert("Excel exported successfully");
      },
      (error) => {
        console.log(error);
        
        alert("Excel could not be exported " + error.message);
      }
    );

  }
}
