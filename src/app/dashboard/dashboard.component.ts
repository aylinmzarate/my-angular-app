import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  recommendations: any[] = []; // Usa any[] para datos genéricos

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getRecommendations().subscribe(
      (data: any[]) => { // Usa any[] para datos genéricos
        this.recommendations = data;
      },
      (error: any) => {
        console.error('Error fetching recommendations:', error);
      }
    );
  }
}
