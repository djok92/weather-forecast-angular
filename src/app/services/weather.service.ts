import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  makeRequest(type, city, country) {
    const ENDPOINT_URL = `http://api.openweathermap.org/data/2.5/${type}?q=${encodeURI(city)},${encodeURI(country)}&lang=hr&units=metric&appid=1384eff7759c6a754d37878aaa944cdb`;
    return this.http.get(ENDPOINT_URL)
      .pipe(
        map((res: any) => {
          return res;
        })
      )
  }
}
