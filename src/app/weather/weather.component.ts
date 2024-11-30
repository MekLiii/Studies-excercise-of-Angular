import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {weatherType} from './weather.types';
import {MatCard, MatCardModule} from '@angular/material/card';
import {CommonModule} from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatDividerModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  private apiUrl = 'https://api.weatherapi.com/v1/current.json?key=6fed8bb1bfd24dc090a115944231504&q=';
  public cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'Madrid'];
  public weatherData = this.cities.reduce((acc, city) => {
    acc[city] = null;
    return acc;
  }, {} as { [key: string]: weatherType | null });

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.cities.forEach(city => {
      this.fetchWeatherData(city).subscribe(data => {
        this.weatherData[city] = data;
      });
    })
  }

  fetchWeatherData(city: string): Observable<weatherType> {
    return this.http.get(`${this.apiUrl}${city}&aqi=no`) as Observable<weatherType>;
  }

}
