import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-searchPanelComponent',
  templateUrl: './searchPanelComponent.html',
  styleUrls: ['./searchPanelComponent.css'],
})
export class searchPanelComponent {
  search: FormControl = new FormControl();
  @Output() public cityName = new EventEmitter<any>();

  previousValues: string[] = ['test1', 'test2', 'test3'];
  suggestions: string[] = [];
  data;
  constructor(private readonly store: Store<any>) {}
  ngOnInit() {
    this.suggest();
  }
  searchCity(cityName: string) {
    debugger;
    this.cityName.emit(cityName);
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
