import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-display-page',
  templateUrl: './weather-display-page.component.html',
  styleUrls: ['./weather-display-page.component.scss']
})
export class WeatherDisplayPageComponent implements OnInit {

  res: any[] = [];
  formValues;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {}

  getFormValues($event) {
    this.formValues = $event;
    this.weatherService.makeRequest('weather', this.formValues.city, this.formValues.country).subscribe(res=> {
      this.res = res;
      console.log(this.res)
    });
  }

}
