import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFeedbackComponent } from './Component/add-feedback/add-feedback.component';
import { CardsComponent } from './Component/cards/cards.component';
import { ContactUsComponent } from './Component/contact-us/contact-us.component';
import { HomePageComponent } from './Component/home-page/home-page.component';
import { MoreDetailsComponent } from './Component/more-details/more-details.component';
import { MyFeedbackComponent } from './Component/my-feedback/my-feedback.component';
const routes: Routes = [
  // {path:"add-dj",component:AddDjComponent},
  // {path:"add-klip",component:AddKlipComponent},
  // {path:"add-record",component:AddRecordComponent},
  // {path:"add-sound",component:AddSoundComponent},
  {path:"my-feedback",component:MyFeedbackComponent},
  {path:"",component:HomePageComponent},
  {path:"contact-us",component:ContactUsComponent},
  {path:"add-feedback",component:AddFeedbackComponent},
  {path:"cards",component:CardsComponent,children:[
    {path:"MoreDetails/:name",component:MoreDetailsComponent}
  ]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  

 }
