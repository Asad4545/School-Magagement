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
    return this.http.post("https://localhost:7055/api/Student/AddStudent", formData)
  }

  GetStudent(){
    return this.http.get<any[]>("https://localhost:7055/api/Student/GetAllStudent")
  }

  GetSingleStudent(id: any){
    console.log(id)
    
    return this.http.get(`https://localhost:7055/api/Student/GetStudent?id=${id}`)
  }

  DeleteStudent(id: any){
    console.log("Service parameter", id)
    return this.http.delete(`https://localhost:7055/api/Student/DeleteStudent?id=${id}`)
}

  
}
