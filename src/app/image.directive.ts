import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appImage]',
  standalone: true
})
export class ImageDirective {
  private isEnlarged = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click')
  toggleEnlarge() {
    this.isEnlarged = !this.isEnlarged;
    if (this.isEnlarged) {
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(2)');
      this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.3s ease-in-out');
      document.addEventListener('click', this.documentClickHandler.bind(this), true);
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1)');
      document.removeEventListener('click', this.documentClickHandler.bind(this), true);
    }
  }

  private documentClickHandler(event: MouseEvent) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.isEnlarged = false;
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1)');
      document.removeEventListener('click', this.documentClickHandler.bind(this), true);
    }
  }
}