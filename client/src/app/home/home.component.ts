import { Component, OnInit } from '@angular/core';
import { Store, provideStore } from '@ngrx/store';
import { people } from '../../people';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
