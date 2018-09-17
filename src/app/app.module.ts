import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StuFormComponent } from './stu-form/stu-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { StuCtrComponent } from './stu-ctr/stu-ctr.component';
import { ButtonCtrComponent } from './button-ctr/button-ctr.component';
import { StudentsService } from './shared/students.service';

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
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
