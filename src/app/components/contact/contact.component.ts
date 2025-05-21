import { Component, OnInit } from '@angular/core';

interface ContactInfo {
  email: string;
  phone: string;
  linkedIn: string;
  github: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactInfo: ContactInfo = {
    email: 'vivekmohta09@gmail.com',
    phone: '+91-8875933184',
    linkedIn: 'linkedin.com/in/vivek-mohta-766ab6179',
    github: 'github.com/Vivekmohta9'
  };

  constructor() { }

  ngOnInit(): void {
  }
}
