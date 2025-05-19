import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  
  footerNavs = [
    { id: 'about', name: 'About' },
    { id: 'experience', name: 'Experience' },
    { id: 'projects', name: 'Projects' },
    { id: 'skills', name: 'Skills' },
    { id: 'contact', name: 'Contact' }
  ];
  
  socialLinks = [
    { icon: 'email', url: 'mailto:vivekmohta09@gmail.com', name: 'Email' },
    { icon: 'linkedin', url: 'https://linkedin.com/in/vivek-mohta-766ab6179', name: 'LinkedIn' },
    { icon: 'code', url: 'https://github.com/Vivekmohta9', name: 'GitHub' }
  ];

  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {
  }
  
  scrollTo(sectionId: string): void {
    this.scrollService.scrollToElement(sectionId);
  }
}
