import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl:'./contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  submitForm(event: Event, form: NgForm) {
    event.preventDefault();
    event.stopPropagation()
    alert(`Message has been send ${form.value?.name || ""}`);
    form.resetForm();
  }
}
