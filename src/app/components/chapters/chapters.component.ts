import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css'],
  animations: [
    trigger('smoothScroll', [
      transition(':increment, :decrement', [
        style({ scrollLeft: '{{ start }}px' }),
        animate('{{ duration }}ms ease-in-out', style({ scrollLeft: '{{ end }}px' })),
      ]),
    ]),
  ],


})
export class ChaptersComponent {
  @ViewChild('menuContainer') menuContainer!: ElementRef;

  scrollAmount = 100;
  scrollDuration = 500;

  menuItems: string[] = [];
  lastClickedId: string | null = null;
  currentChapter!: string[];
  currentChapterId!: string[];

  constructor(private router: Router,
    private renderer: Renderer2,
    private el: ElementRef,
    private route: ActivatedRoute){}

  ngOnInit(): void {
    // Initialize menu items
    for (let i = 1; i <= 30; i++) {
      this.menuItems.push(`Chapter ${i}`);
    }
   
  }

  ngAfterViewInit(): void{
    this.onReadCurrentUrl();
  }

  onReadCurrentUrl(){
    var a = this.router.url
    this.currentChapter = a.split('/chapters/')
    console.log("current url is " + this.currentChapter[1])
    this.currentChapterId = this.currentChapter[1].split('chapter');
    console.log("current id is " + this.currentChapterId);
    this.onLinkClick(+this.currentChapterId[1], this.currentChapter[1]);
  }

  onLinkClick(chapterId: number, id: string): void {
    this.router.navigate(['/chapters', 'chapter'+chapterId]);
    
    // Example: Apply styles to the element with the id
    if (this.lastClickedId) {
    const linkElement = this.el.nativeElement.querySelector(`#${this.lastClickedId}`);
    this.renderer.removeClass(linkElement, 'routerLinkActive');
    console.log("style removed to id" +id);
    }
      // Add the 'routerLinkActive' class to the newly clicked element
      const currentClickedElement = this.el.nativeElement.querySelector(`#${id}`);
      this.renderer.addClass(currentClickedElement, 'routerLinkActive');
      console.log("style added to id" +id);
  
      // Update the lastClickedId to the current clicked id
      this.lastClickedId = id;

  }

  scrollLeft() {
    this.animateScroll(-this.scrollAmount);
    //this.menuContainer.nativeElement.scrollLeft -= this.scrollAmount;
  }

  scrollRight() {
    this.animateScroll(this.scrollAmount);
    //this.menuContainer.nativeElement.scrollLeft += this.scrollAmount;
  }

  private animateScroll(amount: number) {
    const menuContainer = this.menuContainer.nativeElement;
    const start = menuContainer.scrollLeft;
    const end = start + amount;

    menuContainer.scrollTo({
      left: end,
      behavior: 'smooth'
    });
  }

}
