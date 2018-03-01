import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NetworkProvider } from '../../providers/network/network';


import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  name:any;
  password:any;

  isLoggingin:boolean = false;
  Allusers:any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public net:NetworkProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

    this.net.login().subscribe(data=>
      {
        this.Allusers = data;
        console.log(this.Allusers);
      });
  }
  login()
  {

    var i = null;
    for(i=0; this.Allusers.length>i; i++)
    {
      if(this.Allusers[i].name === this.name && this.Allusers[i].password === this.password){
        
        this.isLoggingin = true;
      }
      
    }

    if(this.isLoggingin == true)
    {
      this.net.sendSucessNotification("Preparing things for you");
      this.navCtrl.setRoot(HomePage);
    }
    else{
      this.net.sendFailureNotification("Failed");
    }    
  }


  loadSignup()
  {
  	this.navCtrl.push(SignupPage);
  }
}
