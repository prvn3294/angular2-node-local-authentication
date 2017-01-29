import { Injectable} from '@angular/core'
import { CanActivate ,ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router'
import { Observable } from 'rxjs/RX'
import { AuthenticationService } from '../Services/authentication.service'

@Injectable()
export class AuthGuard implements CanActivate {

constructor( private authService : AuthenticationService, private router: Router ){ }

canActivate( route : ActivatedRouteSnapshot,state : RouterStateSnapshot) : Observable<boolean>|Promise<boolean>|boolean {    
        
    return this.authService.isAuthenticated().map(
        (res) =>{
            if(res.authenticated){
                return true
            }
            else{
                this.router.navigate(['signin'])
                return false
            }
        })               
    }
}