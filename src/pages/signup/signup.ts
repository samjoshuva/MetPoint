import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

	
	Name:string;
	P_Name:string;
	DOB:any;
	Gender:string;
	OCT:string;
	Number:number;
	Mail:string;
	Country:string;
	State:string;
	District:string;
	AuthorNo:number;
	Password:any;

	Con_Pass:any;



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  Signup()
  {
  	this.Data.Name;

  }

}
