import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ScrollService } from './services/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isMobileView: boolean = false;
  showScrollButton: boolean = false;
  
  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showScrollButton = scrollPosition > 500;
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private checkScreenSize(): void {
    this.isMobileView = window.innerWidth <= 768;
  }
}
