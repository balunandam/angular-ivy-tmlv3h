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
  data;
  public ngUnsubscribe: Subject<any> = new Subject();
  constructor(private readonly store: Store<any>) {}
  ngOnInit() {
    debugger;
    this.store
      .pipe(select(weatherSelector.GetWeatherList))
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((res) => {
        if (res && res.result) {
          this.data = res.result;
        }
      });
  }
  searchCity(event) {
    debugger;
    this.store.dispatch(weatherAction.getWeatherReport({ locations: event }));
  }
}
