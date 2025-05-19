import { Component, OnInit } from '@angular/core';
import { Achievement } from '../../shared/models/achievement.model';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {
  achievements: Achievement[] = [
    {
      title: 'NGT Enablement Program',
      description: 'Selected as one of 30 candidates among 100 in Capgemini\'s Next Generation Talent Enablement Program.'
    },
    {
      title: 'Final Round Selection',
      description: 'Selected among 100 people at a national level IOT event at IIT Bombay, hosted by i3indiya technologies.'
    },
    {
      title: 'Dell Campassdor at Dell',
      description: 'Served as a Dell Campus Ambassador, promoting Dell technologies and initiatives.'
    },
    {
      title: 'Internshala Student Partner',
      description: 'Worked as an Internshala Student Partner to help connect students with internship opportunities.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
