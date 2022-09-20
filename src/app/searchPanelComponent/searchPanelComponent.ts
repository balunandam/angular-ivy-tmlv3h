import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  suggestions: string[] = [];
  @Input() previousCityList;
  constructor(private readonly store: Store<any>) {}
  ngOnInit() {
    this.suggest();
  }
  searchCity(cityName: string) {
    this.cityName.emit(cityName);
  }
  suggest() {
    if (this.search.value) {
      this.suggestions = this.previousCityList.filter((item) => {
        return item.startsWith(this.search.value);
      });
      this.suggestions = this.suggestions.slice(0, 100);
    } else {
      this.suggestions = this.previousCityList;
    }
  }
  reload(cityName) {
    this.cityName.emit(cityName);
  }
  delete(index) {
    this.suggestions.splice(index, 1);
  }
}
