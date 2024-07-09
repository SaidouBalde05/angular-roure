import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { TeamComponent } from './team/team.component';
import { partenaire } from './models/models';
import { ImageDirective } from './image.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, PartenaireComponent, TeamComponent, ImageDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  @Input() partenaire!: partenaire;
  appreciation!: number;
 bouton!: string;
 cliquebouton!: boolean;
 

  ngOnInit(): void {
    
  }
  
}
