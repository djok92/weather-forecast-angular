import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-display-current',
  templateUrl: './weather-display-current.component.html',
  styleUrls: ['./weather-display-current.component.scss']
})
export class WeatherDisplayCurrentComponent implements OnInit {

  res: any[] = [];
  formValues;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  getFormValues($event) {
    this.formValues = $event;
    this.weatherService.makeRequest('weather', this.formValues.city, this.formValues.country).subscribe(res=> {
      this.res = res;
      console.log(this.res)
    });
  }
}

