import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NewUser } from '../models/newUser/newUser.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticationState = new BehaviorSubject(false);
  constructor(private plt: Platform) {

   }

   CreateNewUser(newUser: NewUser){

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
