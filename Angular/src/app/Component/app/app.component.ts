import { Component } from '@angular/core';
import { GiftService } from 'src/app/Services/gift.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project';
  color = 'yellow';

 constructor(public ser:GiftService){

 }
  ngOnInit(): void {
  
} 
}
