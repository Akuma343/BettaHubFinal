import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  menuOpen = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  // ✅ Auth check
  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  // ✅ Landing/Login/Register pages
  isAuthPage(): boolean {
    const url = this.router.url;
    return (
      url === '/' ||
      url === '/login' ||
      url === '/register'
    );
  }

  // ✅ Logout
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
    this.menuOpen = false;
  }

  // (optional) user name
  getUserName(): string {
    return this.authService.getCurrentUser()?.name || '';
  }
}
