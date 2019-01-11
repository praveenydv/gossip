import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';
import {ChatPage} from '../chat/chat';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {HomePage} from '../home/home';

/**
 * Generated class for the LoggedinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-loggedin',
  templateUrl: 'loggedin.html',
})

export class LoggedinPage {
 username:string;
 message:string='';
 name:string='';
 subscription;
 sub;
 messages:object[]=[];
 users:object[]=[];
 user:string='';
 input='';

  constructor( public db: AngularFireDatabase,private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
 
   this.sub=this.db.list('/users').subscribe(data => {  
   this.users = data;
                       });
   this.username = navParams.get('username');
   }

   
ionViewDidLoad(){
    console.log('ionViewDidLoad LoggedinPage');
  }
  
  
goforchat(otheruser:string){
  this.navCtrl.push(ChatPage,{input:otheruser,username:this.username});
  }
  

logout(){
    this.navCtrl.setRoot(HomePage);
 }
 
}
