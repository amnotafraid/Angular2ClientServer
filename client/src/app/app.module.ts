import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Store, provideStore } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContainerComponent } from './container/container.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonInputComponent } from './person-input/person-input.component';
import { people } from '../people';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContainerComponent,
    PersonListComponent,
    PersonInputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [provideStore({ people })],
  bootstrap: [AppComponent]
})
export class AppModule { }
