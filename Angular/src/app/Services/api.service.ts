import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Feedback } from '../Interfaces/Feedback';


type NewFeedback = Feedback;


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  env=environment;
 feedbackList:Array<Feedback>=[];

  constructor(private http: HttpClient) { }

  Get():Observable<NewFeedback[]>{
    return this.http.get<Feedback[]>(this.env.URL+'/Feedback');
  }
  Put(item:Feedback):Observable<Feedback[]>{
    return this.http.put<Feedback[]>(this.env.URL+'/Feedback',item);
  }
  post(feed:Feedback):Observable<Feedback[]> {
    return this.http.post<Feedback[]>(this.env.URL+'/Feedback',feed)
  }
  // Post(comment:myComment):Observable<Feedback[]>{
  //   debugger
  //   return this.http.post<myComment[]>(this.env.URL+'/Comment',comment);
  // }

// Put(comment:myComment):Observable<myComment[]>{
//     return this.http.put<myComment[]>(this.env.URL+'/Comment',comment);
//   }
// Get(id:string){
//   const params = new HttpParams({
//     fromObject: {
//       id:id,
//   }
//     })
//     return this.http.get("https://localhost:44349/API_Project/Default/Get",id);
//   };
    
// Post(id:string){
// const params = new HttpParams({
//   fromObject: {
//     id:id,
// }
//   })
//   return this.http.post("https://localhost:44349/API_Project/Default/Post",id);
// };

// Put(id:string){
// const params = new HttpParams({
//   fromObject: {
//     id:id, 
// }
//   })
// return this.http.put("https://localhost:44349/API_Project/Default/Put",id);

// };

Delete(id:string){
  const params = new HttpParams({
    fromObject: {
      id:id,
     
  }
    })
   return this.http.delete("https://localhost:44349/API_Project/Default/Delete"
,{params:params});  
  };
}
