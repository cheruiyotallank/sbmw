import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRipple]',
  standalone: true
})
export class RippleDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    const button = this.element.nativeElement;
    const rect = button.getBoundingClientRect();
    
    // Create ripple element
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    
    // Calculate ripple position
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    // Set ripple styles
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    // Add ripple to button
    this.renderer.appendChild(button, ripple);
    
    // Remove ripple after animation
    setTimeout(() => {
      this.renderer.removeChild(button, ripple);
    }, 600);
  }
}
