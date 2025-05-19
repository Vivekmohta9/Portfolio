import { Component, OnInit } from '@angular/core';
import { Project } from '../../shared/models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'One Cost',
      period: 'December 2022 - Present',
      description: 'A common flexible tool for RFQ cost calculation. This project involved migrating from on-premise to Azure cloud and was rewritten using Angular and .Net Core.',
      technologies: ['Angular', '.NET Core', 'Azure', 'SQL Server']
    },
    {
      title: 'Proof Direct',
      period: 'November 2021 - November 2022',
      description: 'Upgraded Angular version from 7 to 12, implemented vulnerability fixes, and integrated Clamav for malware detection.',
      technologies: ['Angular', 'TypeScript', 'Clamav']
    },
    {
      title: 'GMT - Generic Mapping Tool',
      period: 'November 2020 - October 2021',
      description: 'A tool designed to bridge different systems by enabling users to map related data. This project also involved migration from on-premise to Azure cloud.',
      technologies: ['Angular', '.NET Core', 'Azure', 'SQL Server']
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
