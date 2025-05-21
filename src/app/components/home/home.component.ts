import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  
  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  scrollToSection(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);
  }

  private setupIntersectionObserver(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, options);

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
      observer.observe(section);
    });
  }
}
