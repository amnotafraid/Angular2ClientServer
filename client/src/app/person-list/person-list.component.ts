import { 
         ChangeDetectionStrategy,
         Component,
         EventEmitter,
         Input,
         OnInit,
         Output
        } from '@angular/core';
import { people } from '../../people';

@Component({
  selector: 'person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonListComponent implements OnInit {
	/*
		"dumb" components do nothing but display data based on input and 
		emit relevant events back up for parent, or "container" components to handle
	*/
	@Input() people;
	@Input() filter;
	@Output() addGuest = new EventEmitter();
	@Output() removeGuest = new EventEmitter();
	@Output() removePerson = new EventEmitter();
	@Output() toggleAttending = new EventEmitter();

  fireToggleAttending(id) {
    this.toggleAttending.emit(id);
  }

  constructor() { }

  ngOnInit() {
  }

}
