import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserModel } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';
declare var $: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  collegeValue:any

 
  submitted = false;
  event: any;
  error = '';
  Location=[
     {id:1, name:"Mysore"}, {id:2, name:"Thandavapura"},
  ]
  
  public college: any = [
    { id: 1, name: 'Maharaja Institute of Technology Mysore', collegeID:1 },
    { id: 2, name: 'Maharaja Institute of Technology Thandavapura ' ,collegeID:2},
    { id: 3, name: 'GSSS Institute of Engineering and Technology for Women Mysore', collegeID:1},
    { id: 4, name: "St. Philomena's College Mysore", collegeID:1},
    { id: 5, name: 'Yenepoya Institute Of Technology Mysore' ,collegeID:1},
  ];
  department: any = [
    { id: 1, name: 'Computer Science Engineering 2', departmentID:1},
    { id: 2, name: 'Computer Science Engineering 3' , departmentID:2},
    { id: 3, name: 'Information Science Engineering ' , departmentID:1},
    { id: 4, name: 'Information Science Engineering' , departmentID:2},
    { id: 5, name: 'Electronics and Communication Engineering ' , departmentID:1},
    { id: 6, name: 'Electronics and Communication Engineering', departmentID:2 },
    { id: 7, name: 'Civil Engineering ' , departmentID:1},
    { id: 8, name: 'Civil Engineering' , departmentID:2},
    { id: 9, name: 'Mechanical Engineering ', departmentID:1 },
    { id: 10, name: 'Mechanical Engineering' , departmentID:2},
  ];
  year: any = [ {id:1,name:'second year'} ,{id:2,name:'Third year'}];
  paymentMode: any = [
    'Credit Card',
    'Debit Card',
    'UPI',
    'NetBanking',
    'No-cost EMI',
    'UPI',
  ];
  public listCollegeDropdownData = [];
  public listDepartment =[]
  departmentID:number;
  collegeID:number;
  U: UserModel = new UserModel('','','','','','','','','','','','','','','',''  );
  collegeListDrop =[]
  departmentListDrop=[]
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private user: UserService
  ) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      location: ['', [Validators.required]],
      college: ['', [Validators.required]],
      register_no: ['', [Validators.required]],
      father_name: ['', [Validators.required]],
      father_last: ['', [Validators.required]],
      father_email: ['', [Validators.required]],
      father_phone: ['', [Validators.required]],
      department: ['', [Validators.required]],
      year: ['', [Validators.required]],
      paymentMode: ['', [Validators.required]],
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.registrationForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.registrationForm.value)
    if(this.registrationForm.value.paymentMode ==="No-cost EMI"){
      console.log('hello')
      this.router.navigate(['/emi']);
    }else {
      this.router.navigate(['/auth/subscribe']);
    }
    this.user.postUser(this.registrationForm.value).subscribe((data) => { });
    $('.close').click();
    window.localStorage.setItem('applicant_details', JSON.stringify(this.U));

    console.log(this.registrationForm.value.paymentMode)
    
  }
  FirstName(event: any) {
    this.U.name = event.target.value;
  }
  LastName(event: any) {
    this.U.lastName = event.target.value;
  }
  Email(event: any) {
    this.U.email = event.target.value;
  }
  Phone(event: any) {
    this.U.contact = event.target.value;
  }
  College(event: any) {
    this.U.college = event.target.value;
  }
  Course(event: any) {
    this.U.department = event.target.value;
  }
 public locationSet(){
   console.log( this.registrationForm.value.location)
  this.collegeID = + this.registrationForm.value.location

    this.collegeListDrop = this.college.filter(
      (c:any) => c.collegeID === this.collegeID
      
      );
    //  console.log(this.collegeListDrop)
  }

  public yearSet(){
    console.log( this.registrationForm.value.location)
   this.departmentID = + this.registrationForm.value.year
 
     this.departmentListDrop = this.department.filter(
       (c:any) => c.departmentID === this.departmentID
       
       );
     
   }
 
}
