import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { LoggedinPage } from '../pages/loggedin/loggedin';
import { ChatPage } from '../pages/chat/chat';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthProvider } from '../providers/auth/auth';
import { MomentModule } from 'angular2-moment';
  

const firebaseConfig = {
    apiKey: "AIzaSyB4l8DXRN6b4aXOZ42p7U-IG_5L_cMTdeI",
    authDomain: "gossip-56344.firebaseapp.com",
    databaseURL: "https://gossip-56344.firebaseio.com",
    projectId: "gossip-56344",
    storageBucket: "gossip-56344.appspot.com",
    messagingSenderId: "883380069607"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    LoggedinPage,
    ChatPage,
     
  ],
  imports: [
    BrowserModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    MomentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    LoggedinPage,
    ChatPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    ]
})
export class AppModule {}
