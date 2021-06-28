import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SharedService {
  private baseUrl = "";
  constructor(private http: HttpClient) {}

  getHttp(url: string) {
    return this.http.get(url);
  }

  postHttp(url: string, req: string) {
    return this.http.post(url, req);
  }
}
