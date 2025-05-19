import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {
  }
  
  scrollToSection(sectionId: string): void {
    this.scrollService.scrollToElement(sectionId);
  }
}
