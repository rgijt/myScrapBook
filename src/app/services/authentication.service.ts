import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticationState = new BehaviorSubject(false);
  constructor(private plt: Platform) {

   }

   login() {

   }

   logout() {

   }

   isAuthenticated() {

   }

   checkToken(){
     
   }
}
