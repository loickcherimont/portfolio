import { Component, input } from '@angular/core';
import { StatInfo } from './stat-info';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.html',
  // Make the <app-stat> host element layout-invisible so the inner
  // `col-12 col-md-4` div becomes a direct child of the parent `.row`.
  // Bootstrap's grid only applies to direct `.col-*` children of `.row`;
  // without this, the cards don't align into equal centered columns.
  host: { style: 'display: contents' },
})
export class Stat {
  statInfo = input.required<StatInfo>();
}
