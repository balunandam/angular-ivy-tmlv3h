import { Component } from '@angular/core';
import * as weatherSelector from '../state/selectors/weather.selector';
import { select, Store } from '@ngrx/store';
import * as weatherAction from '../state/actions/weather.action';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-weatherHomeComponent',
  templateUrl: './weatherHomeComponent.html',
  styleUrls: ['./weatherHomeComponent.css'],
})
export class weatherHomeComponent {
  data: any = {};
  previousCityList: any = [];
  public ngUnsubscribe: Subject<any> = new Subject();
  constructor(private readonly store: Store<any>) {}
  ngOnInit() {
    this.store
      .pipe(select(weatherSelector.GetWeatherList))
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((res) => {
        if (res.message === 'city not found') {
          alert(res.message);
        } else if (res.city.name) {
          this.data = res;
          debugger;
          if (!this.previousCityList.includes(res.city.name)) {
            this.previousCityList.push(res.city.name);
          }
        }
      });
  }
  searchCity(event) {
    this.store.dispatch(weatherAction.getWeatherReport({ locations: event }));
  }
  reloadCity() {
    this.store.dispatch(
      weatherAction.getWeatherReport({ locations: this.data.city.name })
    );
  }
}
