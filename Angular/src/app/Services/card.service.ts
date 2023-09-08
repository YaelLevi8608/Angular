import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Card } from '../Interfaces/Card';

type NewCard = Card;

@Injectable({
  providedIn: 'root'
})

export class CardService {
  cards:Array<Card>=[];

  env=environment;
  constructor(private http: HttpClient) { }

  Get():Observable<NewCard[]>{
    return this.http.get<Card[]>(this.env.URL+'/Cards');
  }
}
