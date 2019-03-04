import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-display-forecast',
  templateUrl: './weather-display-forecast.component.html',
  styleUrls: ['./weather-display-forecast.component.scss']
})
export class WeatherDisplayForecastComponent implements OnInit {

  res: any[] = [];
  error: any = '';
  formValues;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  getFormValues($event) {
    this.formValues = $event;
    this.weatherService.makeRequest('weather', this.formValues.city, this.formValues.country).subscribe(
      (res) => {
        this.res = res;
        console.log(this.res); //nastaviti ovde, uslovi za prikazivanje notifikacija
      },
      (error) => {
        this.error = error.error.message;
        console.log(this.error); //nastaviti ovde, uslovi za prikazivanje notifikacija
      }
    );
  }
}
