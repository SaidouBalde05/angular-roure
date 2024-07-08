import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {
 accueil!: string
 appre!: string;
 clique!: boolean
 ngOnInit(): void {
  this.accueil = 'Accueil'
 }
 onacliquer() {
  this.accueil
  console.log('on a cliquer')
 }
}
