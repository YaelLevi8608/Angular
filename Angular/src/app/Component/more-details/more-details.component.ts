import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from 'src/app/Services/card.service';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.scss']
})
export class MoreDetailsComponent implements OnInit {
  cardFromRoute:any=[];

  constructor(public route:ActivatedRoute,public ser:CardService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((c)=>{
      // console.log(c.get("cardFromRoute"));
      if(c.get("name")&&this.ser.cards.find(i=>i.name== c.get("name")))
      {
        
        this.cardFromRoute=this.ser.cards.find(i=>i.name== c.get("name"))
        console.log(this.cardFromRoute)
      }
    })

  }


}
