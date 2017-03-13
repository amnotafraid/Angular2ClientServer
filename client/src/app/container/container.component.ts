import { Component, OnInit } from '@angular/core';
import { Store, provideStore } from '@ngrx/store';
import { people } from '../../people';
import { id } from '../../id';
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

  constructor(
		private _store: Store<number>
	) { 
		this.subscription = this._store
			.select('people')
			.subscribe(people => {
				this.people = people;
		});
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

	toggleAttending(id){
		this._store.dispatch({
			type: TOGGLE_ATTENDING,
			payload: id
		})
	}

	/* unsubscribe on destroy */
	ngOnDestroy(){
		this.subscription.unsubscribe();
	}

}