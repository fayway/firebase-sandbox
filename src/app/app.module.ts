import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';

const config = {
  apiKey: "AIzaSyAfuHC1dadZddPnKLew3BqFzqtVObqOCok",
  authDomain: "ngmorocco.firebaseapp.com",
  databaseURL: "https://ngmorocco.firebaseio.com",
  projectId: "ngmorocco",
  storageBucket: "",
  messagingSenderId: "484991457339"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
