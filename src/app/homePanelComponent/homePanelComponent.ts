import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-homePanelComponent',
  templateUrl: './homePanelComponent.html',
  styleUrls: ['./homePanelComponent.css'],
})
export class homePanelComponent {
  @Output() public reloadCity = new EventEmitter<any>();
  @Input() data;
  iconArray = [{ id: 803, }];
  constructor() {}
  formateDate(date) {
    var t = new Date(1970, 0, 1);
    t.setSeconds(date);
    return t;
  }
  reload() {
    this.reloadCity.emit();
  }
}
