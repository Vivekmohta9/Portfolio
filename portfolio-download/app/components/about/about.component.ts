import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutText: string = `I am a Software Engineer with experience in designing and developing web applications. I have a strong foundation in technologies such as Angular, .NET Core, and Azure. My career goal is to work in an environment where I can grow professionally and effectively use my skills and knowledge.`;

  constructor() { }

  ngOnInit(): void {
  }
}
