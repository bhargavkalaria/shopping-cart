import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd';
import { Router } from '@angular/router';
import { CredentialsService } from '../../services/credentials.service';
import { Constant } from '../../utils/constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  emailError = Constant.emailError;
  passwordError = Constant.passwordError;

  constructor(private router: Router, private formBuilder: FormBuilder,
              private notification: NzNotificationService, public credentialsService: CredentialsService) {
    this.loginForm = this.formBuilder.group({
      userName: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
    this.notification.config({
      nzPlacement: 'bottomRight',
      nzMaxStack: 1
    });
  }

  ngOnInit(): void {
    if (this.credentialsService.getUser()) {
      this.router.navigate(['customers']);
    }
  }

  doLogin(): void {
    if (this.loginForm.valid) {
      if (this.loginForm.value.password.trim()) {
        const userData = {
          username: this.loginForm.value.userName,
          password: this.loginForm.value.password,
        };
        this.credentialsService.isLoading = true;
        setTimeout(() => {
          this.credentialsService.loginUser(userData);
        }, 2000);
      } else {
        this.notification.create(
          'error',
          'Password Error',
          Constant.passwordTrimMessage,
        );
      }
    }
  }
}
