import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ClassServiceService } from 'src/app/Classes/class/Service/class-service.service';
import { StudentService } from '../../Services/student.service';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})

export class AddStudentComponent {

  @Input() value: any;
  myForm: FormGroup;
  @Input() GetStudent!:()=>void
  StdService: StudentService;
  allClasses: any[] =[];

  constructor(StdService: StudentService, private ClassService: ClassServiceService){

    this.myForm = new FormGroup({ 
      
      
      ID: new FormControl(),
      Name: new FormControl(),
      Id: new FormControl(),
      Address: new FormControl(),
      Phone: new FormControl(),
      DOB: new FormControl(),
      Gender: new FormControl(),
      Email: new FormControl('', [Validators.required, this.emailValidator]),
      Password: new FormControl('', [Validators.required,this.passwordValidator])
    });
    this.StdService = StdService;
  }

  // get emailErrors() {
  //   return this.myForm.controls['email'].errors;

  // }

  //  nameValidator(control: AbstractControl) {
  //   const name = control.value;
  //   if (!name || name.trim().length === 0) {
  //     return { required: true };
  //   }
  //   return null;
  // }

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
  }

  SaveStudent(){
    const formData = new FormData();
    debugger
    console.log(this.value.studentId)
    console.log(this.value)
    if(this.value.studentId == null)
    {
      console.log("InIF")
    formData.append('StudentName', this.myForm?.get('Name')?.value);
    formData.append('Id', this.myForm?.get('Id')?.value);
    formData.append('Email', this.myForm?.get('Email')?.value);
    formData.append('Password', this.myForm?.get('Password')?.value);
    formData.append('DOB', this.myForm?.get('DOB')?.value);
    formData.append('Gender', this.myForm?.get('Gender')?.value);
    formData.append('Phone', this.myForm?.get('Phone')?.value);
    }
    else{
      console.log("InElse")
      formData.append('StudentName', this.myForm?.get('Name')?.value);
      formData.append('Id', this.myForm?.get('Id')?.value);
      formData.append('Email', this.myForm?.get('Email')?.value);
      formData.append('Password', this.myForm?.get('Password')?.value);
      formData.append('DOB', this.myForm?.get('DOB')?.value);
      formData.append('Gender', this.myForm?.get('Gender')?.value);
      formData.append('Phone', this.myForm?.get('Phone')?.value);
      formData.append('StudentId', this.value.studentId);
    }

    this.StdService.SaveStudent(formData).subscribe((Response =>{
      console.log(Response)
      this.GetStudent()
       })); 
  }

  
  ngOnInit(){
    console.log(this.value);
    this.AllClasses()
    this.myForm.get('Name')?.setValue(this.value.studentName);
    this.myForm.get('Id')?.setValue(this.value.id);
    this.myForm.get('Email')?.setValue(this.value.email);
    this.myForm.get('Password')?.setValue(this.value.password);
    this.myForm.get('DOB')?.setValue(this.value.dob);
    this.myForm.get('Gender')?.setValue(this.value.gender);
    this.myForm.get('Phone')?.setValue(this.value.phone);

    console.log(this.value.id)

  }

  AllClasses(){
    this.ClassService.GetClasses().subscribe((Response=> {
      this.allClasses=Response;
      console.log(Response)
      console.log(this.allClasses)
    }));
  }
}

  
