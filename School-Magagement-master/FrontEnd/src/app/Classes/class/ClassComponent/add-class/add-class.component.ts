import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClassServiceService } from '../../Service/class-service.service';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent implements OnInit {

  @Input() value: any;
  @Input() getClass!:()=>void
  myForm: FormGroup;
  ClassService: ClassServiceService;

  constructor(ClassService: ClassServiceService){
    
    this.myForm = new FormGroup({

      ID: new FormControl(),
      Name: new FormControl(),
      });

      this.ClassService = ClassService;
  }

  AddClass(){
    const formData = new FormData();

    console.log(this.value.id)
    console.log(this.value)
    if(this.value.id == null)
    {
      console.log("InIF")
    formData.append('Class_Name', this.myForm?.get('Name')?.value);
    }
    else{
      console.log("InElse")
      formData.append('Class_Name', this.myForm?.get('Name')?.value);
      formData.append('id', this.value.id)
    }

    this.ClassService.AddClass(formData).subscribe((Response=>{
      console.log(Response);
      this.getClass()
    }));
  }

  ngOnInit(){
    console.log(this.value);
    this.myForm.get('Id')?.setValue(this.value.id);
    this.myForm.get('Name')?.setValue(this.value.class_Name);
  }

}
