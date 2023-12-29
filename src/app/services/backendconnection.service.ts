import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendconnectionService {

  private apiUrl = 'http://localhost:9191/welcome'; // Replace with your API endpoint URL

  constructor(private http: HttpClient) { }

  // Create an HTTP GET method
  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
