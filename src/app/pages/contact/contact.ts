import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  submitted = false;

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitForm(): void {
    if (
      !this.formData.name.trim() ||
      !this.formData.email.trim() ||
      !this.formData.message.trim()
    ) {
      this.submitted = false;
      return;
    }

    this.submitted = true;

    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
