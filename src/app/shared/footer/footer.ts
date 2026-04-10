import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  // ✅ Same auth check as header
  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  // ✅ Same landing/auth page logic
  isAuthPage(): boolean {
    const url = this.router.url;
    return (
      url === '/' ||
      url === '/login' ||
      url === '/register'
    );
  }

  // ✅ Safe navigation (used for betta buttons)
  goTo(path: string): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate([path]);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
