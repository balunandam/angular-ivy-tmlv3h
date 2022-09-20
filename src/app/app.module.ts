import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { homePanelComponent } from './homePanelComponent/homePanelComponent';
import { searchPanelComponent } from './searchPanelComponent/searchPanelComponent';
import { weatherHomeComponent } from './weatherHomeComponent/weatherHomeComponent';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './services/apiservice';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { weatherEffects } from './state/effects/weather.effects';
import * as weatherReducer from './state/reducers/weather.reducer';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forRoot([]),
    StoreModule.forFeature(
      weatherReducer.weatherReducerKey,
      weatherReducer.reducer
    ),
    StoreModule.forRoot([])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    homePanelComponent,
    weatherHomeComponent,
    searchPanelComponent,
  ],
  bootstrap: [AppComponent],
  providers: [ApiService, weatherEffects],
})
export class AppModule {}
