import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
  public state:any;
  _data:any;

  constructor(private service:UserService) {
 
    window.location.hash = "no-back-button";

    // Again because Google Chrome doesn't insert
    // the first hash into the history
    window.location.hash = "Again-No-back-button";

    window.onhashchange = function(){
        window.location.hash = "no-back-button";
    }
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.service.confirmation(this._data)
    }, 1200);
   
  } 
  // {"college":"Computer Science Engineering 2","name":"anoop","lastName":"anoop","registerNo":"","email":"arunlajayan@gmail.com","contact":"2582585","guardianFirstName":"","guardianEmail":"","department":"","year":"","paymentMode":"","guardianContact":"","lead_id":"","courseId":"","guardianLastName":"","loan_amount":""}
}
