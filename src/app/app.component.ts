import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'japaneseforindians';

  constructor(private router: Router){}

  videos(){
    
    this.router.navigate(['/chapters']);
     
   }
}
