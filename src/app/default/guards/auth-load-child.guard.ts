import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { CredentialsService } from '../services/credentials.service';

@Injectable({
  providedIn: 'root'
})
export class AuthLoadChildGuard implements CanLoad {
  constructor(private credentialsService: CredentialsService) {

  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    const user = this.credentialsService.getUser();
    console.log("AuthLoadChildGuard -> user", user)
    if (user) {
      return true;
    } else {
      this.credentialsService.logoutUser();
    }
  }
}
