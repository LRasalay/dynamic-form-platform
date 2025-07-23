
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-json-form',
  template: \`
    <jsonforms
      [schema]="schema"
      [uischema]="uischema"
      [data]="data"
      (change)="onChange($event)">
    </jsonforms>
    <button (click)="save()">Save</button>
  \`
})
export class JsonFormComponent implements OnInit {
  schema: any = {};
  uischema: any = {};
  data: any = {};
  role = 'admin';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(`/api/form-schema?role=${this.role}`).subscribe((res: any) => {
      this.schema = res.schema;
      this.uischema = res.uischema;
    });

    this.http.get(`/api/form-data/123`).subscribe((formData) => {
      this.data = formData;
    });
  }

  onChange(event: any) {
    this.data = event.data;
  }

  save() {
    this.http.post(`/api/form-data/123`, this.data).subscribe(() => {
      console.log('Saved!');
    });
  }
}
