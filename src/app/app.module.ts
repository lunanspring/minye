import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StuFormComponent } from './stu-form/stu-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { StuCtrComponent } from './stu-ctr/stu-ctr.component';
import { ButtonCtrComponent } from './button-ctr/button-ctr.component';

@NgModule({
  declarations: [
    AppComponent,
    StuFormComponent,
    NavbarComponent,
    FooterComponent,
    StuCtrComponent,
    ButtonCtrComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
