import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Form_ } from 'src/app/Interfaces/Form_';
// import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
   
  newform:Form_={};
  onSubmit(form:NgForm){
      form.reset()
      // Swal.fire('!תודה', 'הפנייה נשלחה', 'success')      
     }
 
  constructor() { }

  ngOnInit(): void {

  }


}
