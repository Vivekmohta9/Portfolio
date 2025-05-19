import { Component, OnInit } from '@angular/core';
import { Experience } from '../../shared/models/experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [
    {
      company: 'Saint Gobain',
      title: 'Software Engineer',
      period: 'December 2022 - Present',
      responsibilities: [
        'Managed deployment tasks',
        'Understood business functionality and application architecture',
        'Developed functionality according to requirements'
      ]
    },
    {
      company: 'Capgemini',
      title: 'Software Engineer',
      period: 'October 2020 - November 2022',
      responsibilities: [
        'Designed Angular components and responsive UI screens',
        'Upgraded .Net Core 2.2 to 6 version',
        'Led an Angular migration project from Angular 7 to 12'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
