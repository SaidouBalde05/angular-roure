import { Component, Input, OnInit } from '@angular/core';
import { team } from '../models/models';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent implements OnInit {
@Input() membre! : team;
titre!: string;
membre1!: team;
membre2!: team; 
membre3!: team; 
membre4!: team; 
membre5!: team; 
  ngOnInit(): void {
    this.membre1 = new team( 
      'Ismaila Baldé',
      'Architecte IT',
      'ismaila.jpg'
    )
    this.membre2 = new team( 
      'Mamadou Siradio',
      'PDG',
      'ismaila.jpg'
    )
    this.membre3 = new team( 
      'Kadiata Bah',
      'Directrice Adjointe',
      'kadiata.jpg'
    )
    this.membre4 = new team( 
      'Mabo ',
      'Directeur ',
      'mabo.jpg'
    )
    this.membre5 = new team( 
      'Mamadou Saidou Baldé',
      'Stagiaire en Developpement Web',
      'ismaila.jpg'
    )
    this.titre = "L'equipe"
  }
}
