import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
      trigger('slideInAnimation', [
        transition(':enter', [
          style({ transform: 'translateX(-100%)' }),
          animate('500ms', style({ transform: 'translateX(0)' })),
        ]),
      ]),
        trigger('fadeInAnimation', [
          // Define the "void => *" (enter) animation
          transition(':enter', [
            style({ opacity: 0 }),
            animate('2500ms', style({ opacity: 1 })),
          ]),
        ]),
    ],
  })
export class HomeComponent {

  isVisible = false;
  constructor(private router: Router,
  ){}

    ngOnInit() {}



    videos(){
    
   this.router.navigate(['/chapters']);
    
  }

  scrollToBottom(){
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  }

}
