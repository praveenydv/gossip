import { Component,ViewChild } from '@angular/core';
import { NavController ,AlertController} from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';
import {LoggedinPage} from '../loggedin/loggedin';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
 username='';
 password='';
 

//@ViewChild('password') password;
//@ViewChild('username') user;

  constructor(private fire:AngularFireAuth, public navCtrl: NavController,public alertCtrl: AlertController) {

  }
  alert(message: string){
  this.alertCtrl.create({
  title:'Info!',
  subTitle: message,
  buttons: ['OK']
  }).present();
  }

  logintoapp(){

  this.fire.auth.signInWithEmailAndPassword(this.username + '@domian.xta' ,this.password)
  .then(data =>{
      console.log('got some data',this.fire.auth.currentUser);
      this.alert('Success! you are logged in');
      this.navCtrl.push(LoggedinPage,{username:this.username});
  })
  .catch(error =>{
    console.log('got an error',error);
    this.alert(error.message);
  })
   
   console.log('sign in with',this.username,this.password);
  }

forgotpassword(){
       this.alert('Remember your password ! yourself!');
}

}

