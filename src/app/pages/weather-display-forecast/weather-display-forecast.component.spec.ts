import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDisplayForecastComponent } from './weather-display-forecast.component';

describe('WeatherDisplayForecastComponent', () => {
  let component: WeatherDisplayForecastComponent;
  let fixture: ComponentFixture<WeatherDisplayForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherDisplayForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDisplayForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
