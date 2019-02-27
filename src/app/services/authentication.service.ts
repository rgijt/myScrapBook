import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NewUser } from '../models/newUser/newUser.interface';
import { Storage } from '@ionic/storage';
import { FirebaseAuthentication, FirebaseAuthenticationOriginal } from '@ionic-native/firebase-authentication';

const USER_TOKEN = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticationState = new BehaviorSubject(false);

  constructor(private storage: Storage, private plt: Platform, private firebaseAuth: FirebaseAuthenticationOriginal) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
   }

   CreateNewUser(newUser: NewUser){
    //this.firebaseAuth.createUserWithEmailAndPassword().then();
   }

   login() {
    return this.storage.set(USER_TOKEN, 'Bearer 123456').then(res => {
      this.authenticationState.next(true);
    });
   }

   logout() {
    return this.storage.remove(USER_TOKEN).then(() => {
      this.authenticationState.next(false);
    });
   }

   isAuthenticated() {
    return this.authenticationState.value;
   }

   checkToken(){
    return this.storage.get(USER_TOKEN).then(res => {
      if(res){
        this.authenticationState.next(true);
      }
    });
   }
}
