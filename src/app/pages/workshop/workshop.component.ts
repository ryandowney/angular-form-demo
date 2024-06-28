import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss'],
})
export class WorkshopComponent implements OnInit {
  protected workshopForm!: FormGroup<any>;

  ngOnInit() {
    this.workshopForm = new FormGroup<any>({});
  }

  onSubmit() {
    alert('Form submitted!');
    // Implement your logic to handle form data
  }
}
