import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { FormBuilder , FormGroup , FormControl , Validators} from '@angular/forms'
import {AuthenticationService} from '../Services/authentication.service'
import { ShareData } from '../Services/shareddata.service'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm : FormGroup
  email = new FormControl('' , Validators.required)
  password = new FormControl('' , Validators.required)
  errmsg:string
  
  user:any

  constructor( 
      private formBuilder : FormBuilder,
      private authService : AuthenticationService,
      private router:Router,
      private shareData : ShareData
    ) { }

  ngOnInit() {
      this.initForm()
  }

  initForm(){
    this.signinForm = this.formBuilder.group({
      email : this.email,
      password: this.password
    })    
  }

  onSignin(){
      this.authService.signinUser(this.signinForm.value)
        .subscribe(result => {
            if(result.err){
              this.errmsg= result.err              
            }
            else if(result.error){
              this.errmsg= result.error              
            }
            else if(result.redirect){
              this.router.navigate([result.redirect])                            
              this.user = result.crntuser
              this.shareData.setData(this.user)              
            }            
      })  
  }  
}