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
    return this.http.post("https://localhost:7055/api/Teacher/UpdateTeacher", formData)
   }

   GetTeacher(){
    return this.http.get<any[]>("https://localhost:7055/api/Teacher/AllTeacher");
   }

   DeleteTecher(id: any){
    console.log(id);
    return this.http.delete(`https://localhost:7055/api/Teacher/DeleteTeacher?id=${id}`);
   }

}

