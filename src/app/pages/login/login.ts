import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login(identifier: string, password: string): void {
    this.errorMessage = '';

    const result = this.authService.login(identifier, password);

    if (!result.success) {
      this.errorMessage = result.message;
      return;
    }

this.router.navigate(['/home']);  }
}
