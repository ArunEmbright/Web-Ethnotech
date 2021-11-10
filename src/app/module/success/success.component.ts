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
  public user: UserModel = new UserModel('', '', '', '', '', '', '', '', '', '', '','','','','','');
  constructor(private service:UserService) {
    this.user = JSON.parse(localStorage.getItem('applicant_details') || '{}');
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
    this.service.confirmation(this._data)
  } 

}
