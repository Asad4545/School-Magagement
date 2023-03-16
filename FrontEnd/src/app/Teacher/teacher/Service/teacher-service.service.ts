import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherServiceService {

  constructor(private http: HttpClient) {
    this.http = http;
   }

   AddTeacher(formData: FormData){
    this.http.post("https://localhost:7055/api/Teacher/UpdateTeacher", formData).subscribe((Response=>{
      console.log(Response);
    }));
   }

   GetTeacher(){
    return this.http.get("https://localhost:7055/api/Teacher/GetTeacher");
   }

   DeleteTecher(id: any){
    return this.http.delete(`https://localhost:7055/api/Teacher/DeleteTeacher?id="${id}`);
   }

}

