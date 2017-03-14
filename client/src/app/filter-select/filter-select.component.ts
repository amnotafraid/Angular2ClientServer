import { 
        Component, 
        EventEmitter, 
        OnInit, 
        Output 
       } from '@angular/core';

import {
  SHOW_ATTENDING,
  SHOW_ALL,
  SHOW_WITH_GUESTS
} from '../../actions';

@Component({
  selector: 'filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.css']
})
export class FilterSelectComponent implements OnInit {
  public filters = [
      {friendly: "All", action: SHOW_ALL}, 
      {friendly: "Attending", action: SHOW_ATTENDING}, 
      {friendly: "Attending w/ Guests", action: SHOW_WITH_GUESTS}
    ];

	selectedItem = this.filters[0];

  @Output() updateFilter : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  updateFilterChoice(filter){
    this.updateFilter.emit(filter.action);
  }

  ngOnInit() {
  }

}
