import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../Services/authentication.service'
import { ShareData } from '../Services/shareddata.service'
import {Router} from '@angular/router'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

private user:any
isloggedin : boolean

  constructor(
    private authService : AuthenticationService,
    private ShareData : ShareData,
    private router : Router) { }

  ngOnInit() {  
     this.user = this.ShareData.getData()              
  }  
  
  logout(){
    this.authService.logout()
  }
}
