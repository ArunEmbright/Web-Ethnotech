import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { PaymentService } from 'src/app/service/payment.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserModel } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';
const razor = `${environment.razorPay}`
import { CourseDetailsModel } from 'src/app/model/course_details.model';


@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {
  
  @ViewChild('modal') public modalPopup: ModalDirective;
  public courseData: CourseDetailsModel = new CourseDetailsModel('', '', '', '');
  subscribeForm: FormGroup;
rzp1:any;
Rate:string;
_user:any;
data:any;
year:any;

options1 = {
  "key": "rzp_test_bp9JE5PCkN0BYJ", // Enter the Key ID generated from the Dashboard
  "amount": "1300000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  "currency": "INR",
  "name": "Ethnotech",
  "description": "Consultation",
  "image": "assets/img/2hUnzH.jpg",
  "order_id": "", //This is a sample Order ID. Pass the 
  "handler": function (response:any){
      // alert(response.razorpay_payment_id);
      // // alert(response.razorpay_order_id);
      // // callback_url: 'https://your-server/callback_url',
      if (typeof response.razorpay_payment_id == 'undefined' ||  response.razorpay_payment_id ) {
       location.href = `${razor}`;
      } else {
        alert('invalid')
      }
      
  },
  "prefill": {
      "name": "Ethnotech",
      "email": "mail@embrightinfotech.com",
      "contact": "7306701712"
  },
  "notes": {
      "address": "iiop.ethnotech.in"
  },
  "theme": {
      "color": "#3399cc"
  }
};
options2 = {
  "key": "rzp_test_bp9JE5PCkN0BYJ", // Enter the Key ID generated from the Dashboard
  "amount": "2600000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  "currency": "INR",
  "name": "Ethnotech",
  "description": "Consultation",
  "image": "assets/img/2hUnzH.jpg",
  "order_id": "", //This is a sample Order ID. Pass the 
  "handler": function (response:any){
      // alert(response.razorpay_payment_id);
      // // alert(response.razorpay_order_id);
      // // callback_url: 'https://your-server/callback_url',
      if (typeof response.razorpay_payment_id == 'undefined' ||  response.razorpay_payment_id ) {
       location.href = `${razor}`;
      } else {
        alert('invalid')
      }
      
  },
  "prefill": {
      "name": "Ethnotech",
      "email": "mail@embrightinfotech.com",
      "contact": "7306701712"
  },
  "notes": {
      "address": "iiop.ethnotech.in"
  },
  "theme": {
      "color": "#3399cc"
  }
};
  constructor(private paymentService: PaymentService, private router: Router,private service: UserService) { 
    

  }

  ngOnInit(): void {
  }
  
Paynow(){
  
  if(this.year =='1'){
    this.rzp1 = new this.paymentService.nativeWindow.Razorpay(this.options1);
    this.rzp1.open();
    
    
  }
  if(this.year =='2'){
    this.rzp1 = new this.paymentService.nativeWindow.Razorpay(this.options2);
    this.rzp1.open();
   
   
  }
 
  
}

SelectedYear1(event:any){
  console.log(this._user)
  this.year = event.target.value
  if(this.year =='1'){
    this.Rate ='13000'
  }
  if(this.year =='2'){
    this.Rate ='26000'
  }


}
}
