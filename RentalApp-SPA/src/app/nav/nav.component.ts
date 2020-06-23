import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit(): void {
  }

  login(){
    // console.log(this.model);
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged in successfully');
      this.alertify.success('logged in successfully');
    }, error => {
      console.log('Failed to login');
      console.log(error);
      this.alertify.error(error);
    });
  }


  loggedIn(){

    return this.authService.loggedIn();
  }

  logout(){
    localStorage.removeItem('token');
    console.log('logged out');
    this.alertify.message('user logged out');
  }

}
