import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackendconnectionService } from 'src/app/services/backendconnection.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router,
    private authService: SocialAuthService){}

 
  videos(){
    
   this.router.navigate(['/chapters']);
    
  }

}
