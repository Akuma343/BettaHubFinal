import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-betta-types',
  standalone: true,
  templateUrl: './betta-types.html',
  styleUrl: './betta-types.css'
})
export class BettaTypes {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  openBettaType(path: string): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate([path]);
      return;
    }

    this.router.navigate(['/login']);
  }
}
