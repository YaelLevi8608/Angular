import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from 'src/app/Services/card.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor(public ser:CardService,public route:Router) {

   }

  ngOnInit(): void {
    this.ser.Get().subscribe((data)=>{this.ser.cards=data;
      console.log(data)}
      ,(error)=>{console.log("error"+error)})
    
}
more(name:any){
  this.route.navigate(['/cards/MoreDetails',name])
  console.log(this.route.navigate(['/cards/MoreDetails',name]))

}
}