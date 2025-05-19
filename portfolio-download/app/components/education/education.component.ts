import { Component, OnInit } from '@angular/core';
import { Education } from '../../shared/models/education.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  educations: Education[] = [
    {
      degree: 'Bachelor of Technology - B Tech, Computer Science',
      institution: 'JECRC University',
      period: '2016-2020',
      grade: '8.5 CGPA'
    },
    {
      degree: 'Senior Secondary',
      institution: 'New Public Sr Secondary School',
      period: '2015-2016'
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Springdales Children\'s School',
      period: '2013-2014'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
