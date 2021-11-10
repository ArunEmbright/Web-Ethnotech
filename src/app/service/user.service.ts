import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { catchError, map, tap } from "rxjs/operators";
import { CourseDetailsModel } from 'src/app/model/course_details.model';
declare var jQuery: any;
const backURL = `${environment.apiURL}`;
const emiURL =`${environment.BaseUrl}`
const razopay =`${environment.razorPay}`
declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class UserService {
_user:any

_data:any;
  courseData: any;
  constructor(private http: HttpClient,
    private router: Router) { 
      this._user = JSON.parse(localStorage.getItem('applicant_details') || '{}');
      console.log(this._user.name)
    }

    postUser(params:any){
      return this.http.post<any>(`${backURL}/auth/register`,params).pipe(
        map((res)=>{
          return res;
        })
      )
    }
    getUser() {
      return this.http.get(`${backURL}/auth/userList`);
    }
    postEMI(formData:any){
      this.http.post<any>(`${emiURL}/register/emi/update`, formData).subscribe(
        (res:any) => {
          console.log('From server', res);
       
        }, (err:any) => console.log(err)
      )

    }
    confirmation(_data:any){
      _data={"email":this._user.email}
      this.http.post<any>(`${backURL}/auth/confirmation`, _data).subscribe(
        (res:any) => {
          console.log('From server', res);
         
        }, (err:any) => console.log(err)
      )
    }
    submitPayment(_data:any,rate:string){
      _data={
        
          "meta_data":"ASWE12345",
          "userName":"UATEthnotech",
          "password":"4447f915b68e17a3338049a64220e08e",
          "course_details":{
          "client_institute_id":this._user.college,
          "client_course_id":this._user.department,
          "client_location_id":"1",
          "loan_amount":rate,
          },
          "applicant_details":{
          "first_name":this._user.name,
          "last_name":this._user.lastName,
          "mobile":this._user.contact,
          "email":this._user.email
          }
          
      }
      this.http.post<any>('https://id-staging.eduvanz.com/api/instantdecision/createQuickLead',_data).subscribe(
        (res:any)=>{
        
        }

      )
      setTimeout(() => {
        $('.close').click();
        window.location.href = razopay;
      }, 2000);
     
    }
}
