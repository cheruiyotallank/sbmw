import { Directive, ElementRef, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appDragScroll]',
  standalone: true
})
export class DragScrollDirective {
  private isDown = false;
  private startX = 0;
  private scrollLeft = 0;

  constructor(
    private el: ElementRef<HTMLElement>,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  @HostListener('mousedown', ['$event'])
  onMouseDown(e: MouseEvent) {
    if (!isPlatformBrowser(this.platformId)) return;
    this.isDown = true;
    this.el.nativeElement.classList.add('grabbing');
    this.startX = e.pageX - this.el.nativeElement.offsetLeft;
    this.scrollLeft = this.el.nativeElement.scrollLeft;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.isDown = false;
    this.el.nativeElement.classList.remove('grabbing');
  }

  @HostListener('mouseup')
  onMouseUp() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.isDown = false;
    this.el.nativeElement.classList.remove('grabbing');
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    if (!isPlatformBrowser(this.platformId)) return;
    if (!this.isDown) return;
    e.preventDefault();
    const x = e.pageX - this.el.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 2; // Scroll-fast modifier
    this.el.nativeElement.scrollLeft = this.scrollLeft - walk;
  }
}
