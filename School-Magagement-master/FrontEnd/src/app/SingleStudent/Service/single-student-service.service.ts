import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingleStudentServiceService {

  constructor(private http: HttpClient) 
  {
    this.http= http;
    
  }

  MarkAttendence(formData: FormData){
    console.log(formData)
    return this.http.post("https://localhost:7055/api/Attendance/UpdateAttendance", formData)
  }

  GetAttendance(){
    return this.http.get<any[]>("https://localhost:7055/api/Attendance/GetAllAttendance")
  }

  StudentLogin(email: any, password: any){
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    return this.http.post("https://localhost:7055/api/Student/Login", formData);
}


}
