import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SingleStudentServiceService } from '../Service/single-student-service.service';

@Component({
  selector: 'app-single-student-componenet',
  templateUrl: './single-student-componenet.component.html',
  styleUrls: ['./single-student-componenet.component.css']
})
export class SingleStudentComponenetComponent {

  @Input() value: any;
  loginForm: FormGroup;
  // myForm: FormGroup;
  myFormAttend: FormGroup;
  constructor(private AttenService: SingleStudentServiceService) 
  {
    this.loginForm = new FormGroup({
      Email: new FormControl(),
      Password: new FormControl(),
    });

    this.myFormAttend = new FormGroup({
      RollNo: new FormControl(),
      Date: new FormControl(),
      AttenStatus: new FormControl(),
    });

    // this.myForm = new FormGroup
    // ({ 
    //   StdId: new FormControl(),
    //   Date: new FormControl(),
    //   AttenStatus: new FormControl()
    // });
  }

  get Email(){
    return this.loginForm.get("Email")?.value
  }

  get Password(){
    return this.loginForm.get("Password")?.value
  }

  ngOnInit() {
     debugger
    console.log("Working")
    this.myFormAttend.get('StdId')?.setValue(this.value.studentId);
    this.myFormAttend.get('Date')?.setValue(this.value.date);
    this.myFormAttend.get('AttenStatus')?.setValue(this.value.attendanceStatus);
    
  }

  MarkAttendance(std: any){
    const formData = new FormData();
    debugger
    console.log(this.value.studentId)
    console.log(this.value)
  
      console.log("InElse")
      formData.append('StudentId', this.myFormAttend?.get('StdId')?.value);
      formData.append('DateTime', this.myFormAttend?.get('Date')?.value);
      formData.append('AttendanceStatus', this.myFormAttend?.get('AttenStatus')?.value);
      formData.append('AttendanceId', this.value.attendanceId);
    

    this.AttenService.MarkAttendence(std).subscribe((Response =>{
      console.log(Response)
       })); 
  }

  StudentLogin(){
    this.AttenService.StudentLogin(this.Email, this.Password).subscribe((Response=>{
      console.log(Response)
    }));
  }
}
