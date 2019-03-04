import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDisplayFormCurrentComponent } from './weather-display-form-current.component';

describe('WeatherDisplayFormCurrentComponent', () => {
  let component: WeatherDisplayFormCurrentComponent;
  let fixture: ComponentFixture<WeatherDisplayFormCurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherDisplayFormCurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDisplayFormCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
