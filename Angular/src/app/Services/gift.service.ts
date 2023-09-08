import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiftService {
private gift:BehaviorSubject<string>=new BehaviorSubject('בהוספת תגובה תהיה זכאי למתנה!');
  constructor() { }
 public get(){
   return this.gift
  }
 public set()
 {
  this.gift.next('תודה שהגבת, הנך זכאי למתנה');
 }
  
}
