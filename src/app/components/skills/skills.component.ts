import { Component, OnInit } from '@angular/core';
import { Skill } from '../../shared/models/skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: { category: string, items: Skill[] }[] = [
    {
      category: 'Frontend',
      items: [
        { name: 'Angular', level: 90, category: 'frontend' },
        { name: 'TypeScript', level: 85, category: 'frontend' },
        { name: 'HTML', level: 90, category: 'frontend' },
        { name: 'CSS', level: 85, category: 'frontend' },
        { name: 'JavaScript', level: 85, category: 'frontend' }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'C#', level: 80, category: 'backend' },
        { name: '.NET Core', level: 85, category: 'backend' },
        { name: 'API Integration', level: 75, category: 'backend' },
        { name: 'SQL Server', level: 75, category: 'backend' }
      ]
    },
    {
      category: 'Cloud & DevOps',
      items: [
        { name: 'Azure', level: 80, category: 'cloud' },
        { name: 'Azure DevOps', level: 75, category: 'tools' }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
