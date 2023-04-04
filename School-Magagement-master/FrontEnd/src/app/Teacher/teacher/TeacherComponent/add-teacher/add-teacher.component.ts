import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClassServiceService } from 'src/app/Classes/class/Service/class-service.service';
import { TeacherServiceService } from '../../Service/teacher-service.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  @Input() value: any;
  @Input() getTeacher!:()=>void
  myForm: FormGroup;
  allClasses: any[]=[]
  TchService: TeacherServiceService;
  isFormValid: boolean = false;


  constructor(TchService: TeacherServiceService, private clasService: ClassServiceService){
    
    this.myForm = new FormGroup({

      ID: new FormControl(),
      Name: new FormControl(),
      Id: new FormControl(),
      Address: new FormControl(),
      Phone: new FormControl(),
      DOB: new FormControl(),
      Gender: new FormControl(),
      Email: new FormControl('', [Validators.required, this.emailValidator]),
      Password: new FormControl('', [Validators.required, this.passwordValidator]),
      });

      this.TchService = TchService;
  }

  ButtonValid(){
    this.myForm.statusChanges.subscribe((status) => {
      this.isFormValid = status === 'VALID';
    });
    
  }

  emailValidator(control: AbstractControl) {
    const Email = control.value;
    if (Email && !Email.endsWith('@stallion.com')) {
      return { invalidEmail: true };
    }
    return null;
  };

   passwordValidator(control: AbstractControl) {
    const password = control.value;
    if (password && password.length < 8) {
      return { invalidPassword: true };
    }
    return null;
  };

  AddTeacher(){
    const formData = new FormData();

    console.log(this.value.teacherId)
    console.log(this.value)
    if(this.value.teacherId == null)
    {
      console.log("InIF")
    formData.append('TeacherName', this.myForm?.get('Name')?.value);
    formData.append('Id', this.myForm?.get('Id')?.value);
    formData.append('Email', this.myForm?.get('Email')?.value);
    formData.append('Password', this.myForm?.get('Password')?.value);
    formData.append('DOB', this.myForm?.get('DOB')?.value);
    formData.append('Gender', this.myForm?.get('Gender')?.value);
    formData.append('Phone', this.myForm?.get('Phone')?.value);
    }
    else
    {
      console.log("InElse")
      formData.append('TeacherName', this.myForm?.get('Name')?.value);
      formData.append('Id', this.myForm?.get('Id')?.value);
      formData.append('Email', this.myForm?.get('Email')?.value);
      formData.append('Password', this.myForm?.get('Password')?.value);
      formData.append('DOB', this.myForm?.get('DOB')?.value);
      formData.append('Gender', this.myForm?.get('Gender')?.value);
      formData.append('Phone', this.myForm?.get('Phone')?.value);
      formData.append('TeacherId', this.value.teacherId);
    }

    this.TchService.AddTeacher(formData).subscribe((Response=>{
      console.log(Response);
      this.getTeacher()
    }));
  }

  ngOnInit(){
    console.log(this.value);
    this.AllClasses()
    this.myForm.get('Name')?.setValue(this.value.teacherName);
    this.myForm.get('Id')?.setValue(this.value.id);
    this.myForm.get('Email')?.setValue(this.value.email);
    this.myForm.get('Password')?.setValue(this.value.password);
    this.myForm.get('DOB')?.setValue(this.value.dob);
    this.myForm.get('Gender')?.setValue(this.value.gender);
    this.myForm.get('Phone')?.setValue(this.value.phone);
  }

  AllClasses(){
    this.clasService.GetClasses().subscribe((Response=>{
      this.allClasses=Response
    }));
  }
  
}
