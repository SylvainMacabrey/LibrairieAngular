import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyAAf05TOJicIGJVZsCxJxdT0B-rMNAYd-c",
      authDomain: "librairie-angular-5d87e.firebaseapp.com",
      databaseURL: "https://librairie-angular-5d87e.firebaseio.com",
      projectId: "librairie-angular-5d87e",
      storageBucket: "librairie-angular-5d87e.appspot.com",
      messagingSenderId: "20939195241",
      appId: "1:20939195241:web:b1e615e8f52eb5b9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

}
