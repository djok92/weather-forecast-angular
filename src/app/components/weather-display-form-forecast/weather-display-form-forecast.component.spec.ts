import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDisplayFormForecastComponent } from './weather-display-form-forecast.component';

describe('WeatherDisplayFormForecastComponent', () => {
  let component: WeatherDisplayFormForecastComponent;
  let fixture: ComponentFixture<WeatherDisplayFormForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherDisplayFormForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDisplayFormForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
