import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { Feedback } from 'src/app/Interfaces/Feedback';
import { ApiService } from 'src/app/Services/api.service';
import { GiftService } from 'src/app/Services/gift.service';


@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.scss']
})
export class AddFeedbackComponent implements OnInit {

  addcomment!: FormGroup;
  d: Date = new Date(Date.now())
  comment: Feedback = {
    id: 0, name: "", email: "", phone:"" ,date:this.d, count: 0,
    description: '---'
  };


  constructor(public http: ApiService,public gift:GiftService) { }

  ngOnInit(): void {

    this.addcomment = new FormGroup(
      {
        email: new FormControl("", [(Validators.required), (Validators.email)]),
        phone: new FormControl("", [(Validators.required), (Validators.minLength(9)), (Validators.maxLength(10))]),
        description: new FormControl("", (Validators.required))
      }
    );
    // this.addcomment.get(`Email`)?.setValidators([Validators.required]);
  }
  OnSubmit() {
    const phon_Label = document.getElementById('phonLabel');
    if (this.addcomment.controls['email'].valid)
      this.comment.email = this.addcomment.controls['email'].value;
    else
      alert("אמייל לא תקין");
    if (this.addcomment.controls['phone'].valid)
      this.comment.phone = this.addcomment.controls['phone'].value;
    else{
      // debugger
      // phon_Label?.classList.add('animated shakeit').delay(6000).queue(function () {
      //       phon_Label.classList.remove('animated shakeit').dequeue();
      //     });
      // console.log("class  "+phon_Label?.classList)
      alert("פון לא תקין");
    }
    if (this.addcomment.controls['description'].valid)
      this.comment.description = this.addcomment.controls['description'].value;
    else
      alert("תגובה לא תקין");
    if (this.addcomment.valid) {
      this.comment.id = this.http.feedbackList.length + 1;
      this.http.post(this.comment).subscribe((data) => {
        alert("תודה שהגבת;)");
        this.gift.set ();
      }
        , (error) => { console.log("error" + error) })
    }
  }
   
 
   
 }
