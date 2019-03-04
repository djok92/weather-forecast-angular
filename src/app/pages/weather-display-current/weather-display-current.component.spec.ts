import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDisplayCurrentComponent } from './weather-display-current.component';

describe('WeatherDisplayCurrentComponent', () => {
  let component: WeatherDisplayCurrentComponent;
  let fixture: ComponentFixture<WeatherDisplayCurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherDisplayCurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDisplayCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
