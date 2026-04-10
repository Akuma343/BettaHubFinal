import { Injectable } from '@angular/core';

type UserRecord = {
  name: string;
  email: string;
  password: string;
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly usersKey = 'bettahub_users';
  private readonly sessionCookieKey = 'bettahub_session';

  register(name: string, email: string, password: string): { success: boolean; message: string } {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPassword = password.trim();

    if (!trimmedName || !trimmedEmail || !trimmedPassword) {
      return {
        success: false,
        message: 'Please fill in all fields.'
      };
    }

    const users = this.getUsers();

    const existingUser = users.find(
      user => user.email.toLowerCase() === trimmedEmail
    );

    if (existingUser) {
      return {
        success: false,
        message: 'An account with this email already exists.'
      };
    }

    const newUser: UserRecord = {
      name: trimmedName,
      email: trimmedEmail,
      password: trimmedPassword
    };

    users.push(newUser);
    localStorage.setItem(this.usersKey, JSON.stringify(users));

    return {
      success: true,
      message: 'Registration successful. You can now log in.'
    };
  }

  login(identifier: string, password: string): { success: boolean; message: string } {
    const trimmedIdentifier = identifier.trim().toLowerCase();
    const trimmedPassword = password.trim();

    if (!trimmedIdentifier || !trimmedPassword) {
      return {
        success: false,
        message: 'Please enter your email/username and password.'
      };
    }

    const users = this.getUsers();

    const matchedUser = users.find(user =>
      user.email.toLowerCase() === trimmedIdentifier ||
      user.name.toLowerCase() === trimmedIdentifier
    );

    if (!matchedUser) {
      return {
        success: false,
        message: 'Account not found.'
      };
    }

    if (matchedUser.password !== trimmedPassword) {
      return {
        success: false,
        message: 'Incorrect password.'
      };
    }

    this.setCookie(
      this.sessionCookieKey,
      encodeURIComponent(JSON.stringify({
        name: matchedUser.name,
        email: matchedUser.email
      })),
      7
    );

    return {
      success: true,
      message: 'Login successful.'
    };
  }

  logout(): void {
    document.cookie = `${this.sessionCookieKey}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }

  isLoggedIn(): boolean {
    return this.getCurrentUser() !== null;
  }

  getCurrentUser(): { name: string; email: string } | null {
    const cookieValue = this.getCookie(this.sessionCookieKey);

    if (!cookieValue) {
      return null;
    }

    try {
      return JSON.parse(decodeURIComponent(cookieValue));
    } catch {
      return null;
    }
  }

  private getUsers(): UserRecord[] {
    const raw = localStorage.getItem(this.usersKey);

    if (!raw) {
      return [];
    }

    try {
      return JSON.parse(raw) as UserRecord[];
    } catch {
      return [];
    }
  }

  private setCookie(name: string, value: string, days: number): void {
    const expiryDate = new Date();
    expiryDate.setTime(expiryDate.getTime() + days * 24 * 60 * 60 * 1000);

    document.cookie = `${name}=${value}; expires=${expiryDate.toUTCString()}; path=/;`;
  }

  private getCookie(name: string): string | null {
    const cookieName = `${name}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');

    for (let cookie of cookies) {
      cookie = cookie.trim();

      if (cookie.startsWith(cookieName)) {
        return cookie.substring(cookieName.length);
      }
    }

    return null;
  }
}
