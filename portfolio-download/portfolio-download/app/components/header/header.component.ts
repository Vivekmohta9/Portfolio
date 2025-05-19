import { Component, HostListener, OnInit } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isScrolled: boolean = false;
  isMobileView: boolean = false;
  isMenuOpen: boolean = false;
  
  sections = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'experience', name: 'Experience' },
    { id: 'projects', name: 'Projects' },
    { id: 'skills', name: 'Skills' },
    { id: 'education', name: 'Education' },
    { id: 'achievements', name: 'Achievements' },
    { id: 'contact', name: 'Contact' }
  ];
  
  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = (window.pageYOffset > 30);
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }
  
  scrollTo(sectionId: string): void {
    this.scrollService.scrollToElement(sectionId);
    if (this.isMobileView) {
      this.isMenuOpen = false;
    }
  }
  
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  private checkScreenSize(): void {
    this.isMobileView = window.innerWidth <= 768;
    if (!this.isMobileView) {
      this.isMenuOpen = false;
    }
  }
}
