import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { headersToString } from "selenium-webdriver/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  fetchDevices(): Observable<any> {
    const url = ` http://localhost:8088/devices`;
    let httpHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    });
    let options = {
      headers: httpHeaders
    };
    return this.httpClient.post<any>(
      url,
      {
        skip: 5,
        take: 5,
        filter: [
          {
            field: "status",
            op: "=",
            value: "1"
          },
          {
            field: "osName",
            op: "like",
            value: "Ubuntu"
          }
        ],
        sort: "id",
        order: "asc"
      },
      options
    );
  }
}
