import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ImageDirective } from '../image.directive';
@Component({
  selector: 'app-test',
  standalone: true,
imports:[CommonModule, ImageDirective],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements OnInit {

  

 ngOnInit(): void {
 
 }
 
  items = [
    { name: 'Saidou Balde', age: 18, image: 'saidou.jpg' },
    { name: 'Ismaila Balde', age: 25, image: 'ismaila.jpg' },
    { name: 'Kadiata Bah', age: 22, image: 'kadiata.jpg' },
    { name: 'Mabo', age: 23, image: 'mabo.jpg' },
    { name: 'Mabo', age: 23, image: 'mabo.jpg' },
    { name: 'Mabo', age: 23, image: 'mabo.jpg' },
   
  ];

  selectedItem: any = null;

  onItemClicked(item: any, event: MouseEvent): void {
    if (this.selectedItem === item) {
      this.selectedItem = null; // Désélectionner l'élément si on clique à nouveau dessus
    } else {
      this.selectedItem = item;
    }
    event.stopPropagation(); // Empêcher l'événement de se propager pour ne pas déclencher le gestionnaire global
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    this.selectedItem = null; // Désélectionner l'élément lorsque l'on clique en dehors
  }
}
