import { Component, OnInit } from '@angular/core';
import { AuthService } from 'ionic-appauth';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private auth : AuthService,
  ) { }

  ngOnInit() {
  }

  public signIn() {
    this.auth.signIn();
  }

}
