import { Component, Input, OnInit } from '@angular/core';
import { partenaire } from '../models/models';
import { CommonModule, LowerCasePipe, UpperCasePipe } from '@angular/common';
@Component({
  selector: 'app-partenaire',
  standalone: true,
  imports: [ UpperCasePipe, LowerCasePipe, CommonModule],
  templateUrl: './partenaire.component.html',
  styleUrl: './partenaire.component.scss'
})
export class PartenaireComponent implements OnInit {
  @Input() partenaire!: partenaire;
  titre!: string;
 
 ngOnInit(): void {
  this.titre = 'Nos Partenaire'
}

 partenairemembre = [
   {name:'mk service immo', description: 'Agence de gestion, location, vente, achat de projet immobilier en Guinée', image:'mk service.jpg'},
   {name:'group marewa', description: "Group marewa est une agence immobiliere incontournable dans le dommaine de l'immobilier en Guinée", image:'marewa.jpg'},
   {name:'aka immobilier new', description:'Agence Immobiliére', image:'aka.jpg'},
   {name:'alim immobilier', description: ' Acheter et louer en toute securite partout en Guinee Avec ALim immobilier la satisfaction', image:'alim.jpg'},
   {name:'group bady sarl', description:  "Chez nous aucun reve n'est trop grand", image:'bady sarl.jpg'},
   {name:'lapyragii', description: " Lapyragii est une societe multi sectoriel qui aspire a offrir des prestations professionelles", image:'lapyragui.jpg'},
   {name:'docta immo', description: "Agence immobiliere", image:'docta.jpg'},
 ]

 }
