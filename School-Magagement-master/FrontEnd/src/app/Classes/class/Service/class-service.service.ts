import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassServiceService {

  constructor(private http: HttpClient) {
    this.http = http;
   }

   AddClass(formData: FormData){
    return this.http.post("https://localhost:7055/api/Class/AddClass", formData)
   }

   GetClasses(){
    return this.http.get<any[]>("https://localhost:7055/api/Class/AllClasses");
   }

   DeleteClass(id: any){
    console.log(id);
    return this.http.delete(`https://localhost:7055/api/Class/DeleteClass?id=${id}`);
   }
}
