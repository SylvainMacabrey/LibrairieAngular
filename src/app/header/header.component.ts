import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuth: boolean;
  mail: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if(user) {
          this.isAuth = true;
          this.mail = user.email; 
        } else {
          this.isAuth = false;
          this.mail = ""; 
        }
      }
    );
  }

  onSignOut() {
    this.authService.signOutUser();
    this.router.navigate(["/auth", "signin"]);
  }

}
