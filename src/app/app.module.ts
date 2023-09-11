import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordianDataComponent } from './accordian-data/accordian-data.component';
import { FormComponent } from './form/form.component';
import { DataHandlerService } from './service/data-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    AccordianDataComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AccordionModule,
    ReactiveFormsModule
    
  ],
  providers: [
    DataHandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
