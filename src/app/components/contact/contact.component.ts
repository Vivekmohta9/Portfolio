import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitted: boolean = false;
  
  contactInfo = {
    email: 'vivekmohta09@gmail.com',
    phone: '8875933184',
    linkedIn: 'linkedin.com/in/vivek-mohta-766ab6179',
    github: 'github.com/Vivekmohta9'
  };

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
  }
  
  submitForm(): void {
    this.isSubmitted = true;
    if (this.contactForm.valid) {
      // In a real application, you would send the form data to a server
      console.log('Form data:', this.contactForm.value);
      this.contactForm.reset();
      this.isSubmitted = false;
      // Show success message or toast notification
    }
  }
}
