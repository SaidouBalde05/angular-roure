import { Component, Input, OnInit } from '@angular/core';
import { partenaire } from '../models/models';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-partenaire',
  standalone: true,
  imports: [ UpperCasePipe],
  templateUrl: './partenaire.component.html',
  styleUrl: './partenaire.component.scss'
})
export class PartenaireComponent implements OnInit {
  @Input() partenaire!: partenaire;
  titre!: string;
 appreciation!: number;
 bouton!: string;
 cliquebouton!: boolean;
 partenaire1!: partenaire; 
 partenaire2!: partenaire;
 partenaire3!: partenaire;
 partenaire4!: partenaire;
 partenaire5!: partenaire;
 partenaire6!: partenaire;
 partenaire7!: partenaire;
 ngOnInit(): void {
  this.appreciation = 10
  this.bouton = 'Apprecier'
  this.titre = 'Partenaire'
  this.partenaire1 = new partenaire (
    ' MK Service iMMO',
    'Agence de gestion, location, vente, achat de projet immobilier en Guinée',
    ' mk service.jpg'
   )
  this.partenaire2 = new partenaire (
   'Group Marewa Immobilier',
   "Group marewa est une agence immobiliere incontournable dans le dommaine de l'immobilier en Guinee",
   'marewa.jpg'
  )
  this.partenaire3 = new partenaire(
   'ACCA Immobilier New',
   'Agence Immobiliére',
   'aka.jpg'
  )
  this.partenaire4 = new partenaire(
   'Alim Immobilier',
   ' Acheter et louer en toute securite partout en Guinee Avec ALim immobilier la satisfaction',
   'alim.jpg'
  )
  this.partenaire5 = new partenaire(
   'Group Bady Sarl',
   "Chez nous aucun reve n'est trop grand",
   'bady sarl.jpg'
  )
  this.partenaire6 = new partenaire(
   'Lapyragii',
   " Lapyragii est une societe multi sectoriel qui aspire a offrir des prestations professionelles",
   'lapyragui.jpg'
  )
  this.partenaire7 = new partenaire(
   'Docta Immo',
   "Agence immobiliere",
   'docta.jpg'
  )
}
onacliquer() {
  if ( this.cliquebouton ) {
    this.avantclique()
  } else {
  this.apreclique()
  } 
}
avantclique() {
  this.appreciation--
    this.bouton = 'Apprecier'
    this.cliquebouton = false
}
apreclique() {
  this.appreciation++
  this.bouton = "J'apprecie"
  this.cliquebouton = true
} 

}
