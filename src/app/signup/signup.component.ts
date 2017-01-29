import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl , Validators} from '@angular/forms'
import {Router} from '@angular/router'
import {AuthenticationService} from '../Services/authentication.service'
import { ShareData } from '../Services/shareddata.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  private user :any

  signupForm : FormGroup
  email = new FormControl('' , Validators.required)
  password = new FormControl('' , Validators.required)

  constructor(private formbuilder : FormBuilder , 
  private authService : 
  AuthenticationService ,
  private router:Router,
  private shareData : ShareData) { }

  ngOnInit() {
    this.initForm()
  }
  
  initForm(){
    this.signupForm = this.formbuilder.group({
      email : this.email,
      password: this.password
    })    
  }

  signup(){
    this.authService.signupUser(this.signupForm.value).subscribe(
      result => {
            if(result.err){
              console.log(result.err)
            }
            else if(result.error){
              console.log(result.err)
            }
            else if(result.redirect){
              this.router.navigate([result.redirect])
              console.log(result.redirect)
              this.user = result.crntuser
              this.shareData.setData(this.user)
              console.log(this.user)

            }            
      }
    )
  }
}