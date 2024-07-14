import { Component, HostListener, Input, OnInit } from '@angular/core';
import { team } from '../models/models';
import { ImageDirective } from '../image.directive';
import { CommonModule, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [ImageDirective, UpperCasePipe, CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent implements OnInit {
@Input() membre! : team;
titre!: string;
// membre1!: team;
// membre2!: team; 
// membre3!: team; 
// membre4!: team; 
// membre5!: team; 
// membre6!: team; 
  ngOnInit(): void {
  //    this.membre1 = new team( 
  //      'Siradio',
  //      'PDG',
  //      'mo-pdg.png'
  //    )
  //    this.membre2 = new team( 
  //      'Ismaila Baldé',
  //     'Architecte IT',
  //      'ismaila.jpg'
  //    )
  //    this.membre3 = new team( 
  //      'Kadiata Bah',
  //      'Directrice Adjointe',
  //      'kadiata.jpg'
  //    )
  //    this.membre4 = new team( 
  //      'Mabo ',
  //      'Directeur ',
  //      'mabo.jpg'
  //    )
  //    this.membre5 = new team(
  //      'Thierno Moussa',
  //      'Developeur Full stack',
  //      ''
  //    )
  //    this.membre6 = new team( 
  //      'Mamadou Saidou Baldé',
  //     'Stagiaire en Developpement Web',
  //     'saidou.jpg'
  //  )
    this.titre = "L'equipe"
  }
  
  teamMembers = [
    { name: 'Siradio', position: 'PDG', age: 0, description: 'Lorem ipsum .', image: 'mo-pdg.png' },
    { name: 'Ismaila Balde', position: 'Architect IT', age: 0, description: 'Lorem ipsum .', image: 'ismaila.jpg' },
    { name: 'Mabo', position: 'Directeur', age: 0, description: 'Lorem ipsum dolor.', image: 'mabo.jpg' },
    { name: 'Kadiata', position: 'Directrice Adjoint', age: 0, description: 'Lorem ipsum .', image: 'kadiata.jpg' },
    { name: 'Thierno Moussa', position: 'Full-Stack developpeur', age: 0, description: 'Lorem ipsum .', image: 'mo-pdg.png' },
    { name: 'Saidou', position: 'Stagiaire', age: 0, description: 'Lorem ipsum .', image: 'saidou.jpg' }
  ];
  selectedMember: any = null;

 

 toggleDescription(member: any): void {
  if (this.selectedMember === member) {
    this.selectedMember = null; 
  } else {
    this.selectedMember = member;
  }
 }

 }
