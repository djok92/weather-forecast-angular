import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { WeatherDisplayFormCurrentComponent } from './components/weather-display-form-current/weather-display-form-current.component';
import { WeatherDisplayFormForecastComponent } from './components/weather-display-form-forecast/weather-display-form-forecast.component';
import { WeatherDisplayPageComponent } from './pages/weather-display-page/weather-display-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SuccessMessageComponent } from './components/success-message/success-message.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    HomeContentComponent,
    WeatherDisplayFormCurrentComponent,
    WeatherDisplayFormForecastComponent,
    WeatherDisplayPageComponent,
    PageNotFoundComponent,
    SuccessMessageComponent,
    ErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
