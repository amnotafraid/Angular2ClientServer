import { 
        Component, 
        OnInit 
       } from '@angular/core';
import 'rxjs/Rx';
import { Store, provideStore } from '@ngrx/store';
import { people } from '../../people';
import { id } from '../../id';
import { partyFilter } from '../../party-filter';
import {
  ADD_PERSON,
  REMOVE_PERSON,
  ADD_GUEST,
  REMOVE_GUEST,
  TOGGLE_ATTENDING
} from '../../actions';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
	public people;
	private subscription;
  public filter;
  public attending;
  public guests;

  constructor(
		private _store: Store<number>
	) { 
		/*
			Observable of people, utilzing the async pipe
			in our templates this will be subscribed to, with
			new values being dispayed in our template.
			Unsubscribe wil be called automatically when component
			is disposed.
		*/
    this.people = _store.select('people');
    /*
      this is a naive way to handle state projection.
      Rx based next lesson.
    */
    this.filter = _store.select('partyFilter');
    this.attending = this.people.map(p => p.filter(person => person.attending));
    this.guests = this.people
        .map(p => p.map(person => person.guests)
                   .reduce((acc, curr) => acc + curr, 0));

	}

  ngOnInit() {
  }

	// all state-changing actions get dispatched to and handled by reducers
	addPerson(name) {
    this._store.dispatch({
      type: ADD_PERSON, 
      payload: {
        id: id(),name
      }
    })
	}

	addGuest(id){
		this._store.dispatch({
			type: ADD_GUEST,
			payload: id
		});
	}

	removeGuest(id){
		this._store.dispatch({
			type: REMOVE_GUEST,
			payload: id
		});
	}

	removePerson(id){
		this._store.dispatch({
			type: REMOVE_PERSON,
			payload: id
		});
	}

	toggleAttending(id){
		this._store.dispatch({
			type: TOGGLE_ATTENDING,
			payload: id
		})
	}

	updateFilter(filter){
		this._store.dispatch({type: filter})
	}

}
