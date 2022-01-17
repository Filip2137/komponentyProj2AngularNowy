import {
    AfterViewInit,
    Directive,
    ElementRef,
    HostListener,
    Input,
    Renderer2,
  } from '@angular/core';
  
  @Directive({
    selector: '[appMyDirective]',
  })
  export class MyDirectiveDirective implements AfterViewInit {
    @Input() color!: string;
  
    constructor(private element: ElementRef, private renderer: Renderer2) {}
  
    ngAfterViewInit(): void {}
  }
  