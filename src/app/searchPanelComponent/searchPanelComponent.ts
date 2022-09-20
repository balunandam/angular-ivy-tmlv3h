import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../services/apiservice';
import { select, Store } from '@ngrx/store';
import * as weatherAction from '../state/actions/weather.action';

@Component({
  selector: 'app-searchPanelComponent',
  templateUrl: './searchPanelComponent.html',
  styleUrls: ['./searchPanelComponent.css'],
})
export class searchPanelComponent {
  search: FormControl = new FormControl();
  previousValues: string[] = ['test1', 'test2', 'test3'];
  suggestions: string[] = [];
  constructor(
    private ApiService: ApiService,
    private readonly store: Store<any>
  ) {}
  ngOnInit() {
    this.suggest();
  }
  searchCity(cityName: string) {
    debugger;
    this.store.dispatch(weatherAction.getWeatherReport({ location: cityName }));
    // this.ApiService.getWeather(cityName).subscribe((data) => console.log(data));
  }
  suggest() {
    if (this.search.value) {
      this.suggestions = this.previousValues.filter((item) => {
        return item.startsWith(this.search.value);
      });
      this.suggestions = this.suggestions.slice(0, 100);
    } else {
      this.suggestions = this.previousValues;
    }
  }
  reload() {}
  delete() {}
}
