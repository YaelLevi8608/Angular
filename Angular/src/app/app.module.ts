import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Component/app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from'./Component/home-page/home-page.component';
import { CardsComponent } from './Component/cards/cards.component';
import { MyFeedbackComponent } from './Component/my-feedback/my-feedback.component';


import { ContactUsComponent } from './Component/contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddFeedbackComponent } from './Component/add-feedback/add-feedback.component';
import { MyPipe } from './my.pipe';
import { HighlightDirective } from './highlight.directive';
import { NewFeedbackComponent } from './Component/new-feedback/new-feedback.component';
import { MoreDetailsComponent } from './Component/more-details/more-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CardsComponent,
    MyFeedbackComponent,

    ContactUsComponent,
    AddFeedbackComponent,
    MyPipe,
    HighlightDirective,
    NewFeedbackComponent,
    MoreDetailsComponent,
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
