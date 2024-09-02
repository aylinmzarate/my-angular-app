import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:5051/api/recommendations'; // Ajusta la URL según tu API

  constructor(private http: HttpClient) { }

  getRecommendations(): Observable<any[]> { // Usa any[] para datos genéricos
    return this.http.get<any[]>(this.apiUrl);
  }
}
