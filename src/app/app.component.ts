import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'japaneseforindians';

  constructor(private router: Router){
    // Check if the current route is empty and navigate to the home page
    if (this.router.url === '/') {
      console.log("url in if" +this.router.url)
      this.router.navigate(['welcome']);
      console.log("url in outside if" +this.router.url)
    }
  }

  videos()
  {
    this.router.navigate(['/chapters']);
   }

   scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
