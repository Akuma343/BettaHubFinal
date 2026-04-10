import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-landing',
  standalone: true,
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class Landing {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  goTo(path: string): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate([path]);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
