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
      company: 'Hexaware Technologies',
      title: 'Senior Software Engineer',
      period: 'November 2022 - Present',
      responsibilities: [
        'Developed and maintained enterprise applications with latest technologies',
        'Collaborated with cross-functional teams to deliver high-quality software solutions',
        'Implemented best practices for application development and deployment'
      ]
    },
    {
      company: 'Saint Gobain',
      title: 'Software Engineer',
      period: 'December 2021 - October 2022',
      responsibilities: [
        'Managed deployment tasks for cloud applications',
        'Analyzed business functionality and application architecture',
        'Developed functionality according to strict client requirements'
      ]
    },
    {
      company: 'Capgemini',
      title: 'Software Engineer',
      period: 'October 2020 - November 2021',
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
