import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { MomentModule } from 'angular2-moment';
import moment from 'moment';
/**
 * Generated class for the LoggedinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
 username:string;
 message:string='';
 name:string='';
 subscription;
 sub;
 i:any=0;
 otheruser:string;
 messages:object[]=[];
 details:object[]=[];
 time:string=''; 
 

  constructor( public db: AngularFireDatabase,private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {

 
   this.otheruser = navParams.get('input');
   this.username = navParams.get('username');
 
  this.subscription=this.db.list(`/${this.username}+${this.otheruser}`).subscribe(data => {  
       this.messages = data;
  });
 
 this.time= moment().format('h:mm a DD/MM');

 }
 
sendMessage(){
	this.db.list(`/${this.username}+${this.otheruser}`).push({
   username:this.username,
   message: this.message,
   time: this.time, 

  }).then( () =>{

  }).catch( () => {

  });
  this.db.list(`/${this.otheruser}+${this.username}`).push({
   username:this.username,
  message: this.message,
   time: this.time,

  }).then( () =>{

  }).catch( () => {

  });
  this.message='';
 }
  

ionViewDidLoad() {
   console.log('ionViewDidLoad LoggedinPage');
  }
  

}
