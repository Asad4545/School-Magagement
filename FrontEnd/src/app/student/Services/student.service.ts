import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  getObj: any[]=[];
    
  constructor(private http: HttpClient) { 
    this.http = http;
  }

  SaveStudent(formData: FormData){
    this.http.post("https://localhost:7055/api/Student/AddStudent", formData).subscribe((Response =>{
    console.log(Response)
     }));
  }

  GetStudent(){
    return this.http.get<any[]>("https://localhost:7055/api/Student/GetAllStudent")
  }

  DeleteStudent(id: any){
    console.log("Service parameter", id)
    return this.http.delete(`https://localhost:7055/api/Student/DeleteStudent?id=${id}`)
}

  
}
