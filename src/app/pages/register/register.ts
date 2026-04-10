import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  errorMessage = '';
  successMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  register(name: string, email: string, password: string): void {
    this.errorMessage = '';
    this.successMessage = '';

    const result = this.authService.register(name, email, password);

    if (!result.success) {
      this.errorMessage = result.message;
      return;
    }

    this.successMessage = result.message;

    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1200);
  }
}
