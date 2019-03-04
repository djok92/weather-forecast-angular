import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder} from "@angular/forms"

@Component({
  selector: 'app-weather-display-form-current',
  templateUrl: './weather-display-form-current.component.html',
  styleUrls: ['./weather-display-form-current.component.scss']
})
export class WeatherDisplayFormCurrentComponent implements OnInit {

  private regForm: FormGroup;
  private city: FormControl;
  private country: FormControl;

  constructor( private formBuilder: FormBuilder) {
    this.city = new FormControl();
    this.country = new FormControl();
    this.regForm = formBuilder.group({
      city: this.city,
      country: this.country
    });
  }

  @Output() emitFormValues = new EventEmitter();

  ngOnInit() {
  }

  sendFormValues() {
    const inputValues = {
      city: this.regForm.get('city').value,
      country: this.regForm.get('country').value,
    } 
    this.emitFormValues.emit(inputValues);
  }

}
