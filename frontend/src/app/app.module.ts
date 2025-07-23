
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { JsonFormsModule } from '@jsonforms/angular';
import { JsonFormsAngularMaterialModule } from '@jsonforms/angular-material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JsonFormComponent } from './json-form/json-form.component';

@NgModule({
  declarations: [JsonFormComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    JsonFormsModule,
    JsonFormsAngularMaterialModule
  ],
  bootstrap: [JsonFormComponent]
})
export class AppModule {}
