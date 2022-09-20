import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-homePanelComponent',
  templateUrl: './homePanelComponent.html',
  styleUrls: ['./homePanelComponent.css'],
})
export class homePanelComponent {
  @Input() data;
  constructor() {}
  ngOnChanges() {
    console.log(this.data);
  }
}
