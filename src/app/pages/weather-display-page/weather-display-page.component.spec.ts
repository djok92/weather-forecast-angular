import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDisplayPageComponent } from './weather-display-page.component';

describe('WeatherDisplayPageComponent', () => {
  let component: WeatherDisplayPageComponent;
  let fixture: ComponentFixture<WeatherDisplayPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherDisplayPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDisplayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
