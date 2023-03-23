import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  constructor(StdService: StudentService){
    this.myForm = new FormGroup({ 
    
    ID: new FormControl(),
    Name: new FormControl(),
    Id: new FormControl(),
    Address: new FormControl(),
    Phone: new FormControl(),
    DOB: new FormControl(),
    Gender: new FormControl(),
    Email: new FormControl(),
    Password: new FormControl(),
    });
    this.StdService = StdService;
  }

  SaveStudent(){
    const formData = new FormData();
    
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
    this.myForm.get('Name')?.setValue(this.value.studentName);
    this.myForm.get('Id')?.setValue(this.value.id);
    this.myForm.get('Email')?.setValue(this.value.email);
    this.myForm.get('Password')?.setValue(this.value.password);
    this.myForm.get('DOB')?.setValue(this.value.dob);
    this.myForm.get('Gender')?.setValue(this.value.gender);
    this.myForm.get('Phone')?.setValue(this.value.phone);

    console.log(this.value.id)

  }

  
}

  
