import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/Interfaces/Feedback';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-my-feedback',
  templateUrl: './my-feedback.component.html',
  styleUrls: ['./my-feedback.component.scss']
})
export class MyFeedbackComponent implements OnInit {
  // feedbackList: Array<Feedback> = [];
  color = 'yellow';
  constructor(public ser: ApiService) {
  }
  ngOnInit(): void {
    this.ser.Get().subscribe((data) => { this.ser.feedbackList = data })

  }
  like(item: Feedback) 
  {
    // alert('jjjjj')
    debugger
    this.ser.Put(item).subscribe((data) => {
      this.ser.feedbackList = data;
      console.log("data" + data)
    }
      , (error) => { console.log("error" + error) })
  
  };

}
  // addLike(feed: Ifeedback) {
  //   debugger;
  //   this.http.Put(feed).subscribe((data) => {
  //     this.FeedbackList = data;
  //     console.log("data" + data)
  //   }
  //     , (error) => { console.log("error" + error) })
  //   debugger;

  // };
//  addLike(comment: myComment) {
//   debugger;
//   this.http.Put(comment).subscribe((data) => {
//     this.ser.comments = data;
//     console.log("data" + data)
//   }
//     , (error) => { console.log("error" + error) })
//   debugger;
// };

