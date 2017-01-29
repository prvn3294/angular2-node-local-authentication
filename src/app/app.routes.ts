import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component'
import { SigninComponent }  from './signin/signin.component'
import { ProfileComponent } from './profile/profile.component'
import { HomeComponent } from './home/home.component'
import { AuthGuard } from './guards/auth.guard'

const APP_ROUTES : Routes =[
    { path : 'home' , component : HomeComponent },
    { path : 'signup' , component : SignupComponent },
    { path : 'signin' , component : SigninComponent },
    { path : 'profile' , component : ProfileComponent , canActivate:[AuthGuard] },
    { path : '' , redirectTo : '/home' , pathMatch:'full' }
]

export const appRouting = RouterModule.forRoot(APP_ROUTES)