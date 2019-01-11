import { Component,ViewChild } from '@angular/core';
import {IonicPage,NavParams, NavController } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';
import { AlertController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-resistor',
  templateUrl: 'register.html'
})


export class RegisterPage {
username='';
password='';
name='';
email='';

//@ViewChild('name') name;
//@ViewChild('username') user;
//@ViewChild('password') password;

  constructor(public db: AngularFireDatabase,private fire:AngularFireAuth,public navCtrl: NavController,public alertCtrl: AlertController) {

  }
  alert(message: string){
  this.alertCtrl.create({
  title:'Info!',
  subTitle: message,
  buttons: ['OK']
  }).present();
  }


registertoapp(){
	this.fire.auth.createUserWithEmailAndPassword(this.username + '@domian.xta',this.password)
	.then(data => {
	console.log('got data',data);
	this.alert('Registered!');
  this.db.list('/users').push({
     username:this.username,
     email:this.email,
     name:this.name
  }).then( () =>{

  }).catch( () => {
 
  });
   this.navCtrl.setRoot(HomePage);
	})
	.catch(error =>{
	console.log('got an error',error);
	this.alert(error.message);
	});

	console.log("email:",this.username, "password:" ,this.password);
	
}
}
