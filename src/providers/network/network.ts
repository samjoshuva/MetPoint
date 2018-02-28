import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import {HttpClient ,HttpHeaders} from '@angular/common/http';

import {  ToastController } from 'ionic-angular';



/*
  Generated class for the NetworkProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NetworkProvider {

  constructor(public http: HttpClient, public toastCtrl  : ToastController) {
    console.log('Hello NetworkProvider Provider');
  }


  insertUser(name, p_name, gender, OCT, p_number, mail, country, state,
   district, a_no, password)
  {
  	let URI = "https://figurable-jack.000webhostapp.com/php/metpoint";

    let headers   : any    = new HttpHeaders({ 'Content-Type': 'application/json' }),
          options   : any    = { "key" :"create", "name" :name,
           "p_name" :p_name,
           "gender" : gender, "OCT" :OCT,"p_number" :p_number,"mail" :mail,
           "country" :country,"state" :state, "district" :district,
           "a_no" :a_no,"password" :password },
          url       : any        = URI+"/connection.php";

      this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data : any) =>
      {
         // If the request was successful notify the user
         
         this.sendSucessNotification(`your account has ben created: ${name}`);
      },
      (error : any) =>
      {
      	console.log(error);
         this.sendFailureNotification('Something went wrong!');
      });

  }


  sendSucessNotification(message : string)  : void
   {
      let notification = this.toastCtrl.create({
          message       : message,
          duration      : 1000,
          position      :'top',
          dismissOnPageChange: false,
          cssClass: "sucess_notification",
      });
      notification.present();
   }

   sendFailureNotification(message : string)  : void
   {
      let notification = this.toastCtrl.create({
          message       : message,
          duration      : 1000,
          position      :'top',
          dismissOnPageChange: false,
          cssClass: "fail_notification",
      });
      notification.present();
   }


}
