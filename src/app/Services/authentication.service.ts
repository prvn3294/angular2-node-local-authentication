import { Injectable} from '@angular/core'
import {Http, Headers, RequestOptions } from '@angular/http'
import {Router} from '@angular/router'
import { Observable } from 'rxjs/RX'
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService{
    
    isloggedin:any

    private header = new Headers({'Content-Type': 'application/json', 'charset':'UTF-8' })
    private options = new RequestOptions({headers : this.header})        

    constructor(private http : Http , private router : Router){}

    signupUser(User) : Observable<any>{             
        return this.http.post('/signup', JSON.stringify(User) , this.options)
            .map( data => {        
                return data = data.json()                
            })
    }
    
    isAuthenticated(): Observable<any>{                
       return this.http.get('/isAuth').map( data=> data.json())             
    }

 

    signinUser(User) : Observable<any>{         
         return this.http.post('/login', JSON.stringify(User) , this.options)
            .map(data => {                
                return data = data.json()                
            })
    } 

    logout() {
         this.http.get('/logout')
             .subscribe( data => {                                  
                 this.isloggedin=false
                 this.router.navigate(['home'])
        })
    }               
}