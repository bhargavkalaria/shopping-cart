import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Constant} from '../../default/utils/constant';
import {CredentialsService} from '../../default/services/credentials.service';
import {NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.scss']
})
export class AdministratorComponent implements OnInit {

  isCollapsed = false;
  username;
  resetPasswordModelVisible = false;
  isConfirmLoading = false;
  validateForm: FormGroup;
  resetOldPassword = Constant.resetOldPassword;
  resetNewPassword = Constant.resetNewPassword;
  newPasswordConfirm = Constant.newPasswordConfirm;
  inconsistentPassword = Constant.inconsistentPassword;

  constructor(private credentialsService: CredentialsService,
              private modalService: NzModalService,
              private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [this.confirmValidator]],
    });
    this.credentialsService.isLoading = false;
  }

  ngOnInit(): void {
    this.username = this.credentialsService.getUser();
  }

  showLogoutConfirmation(): void {
    this.modalService.confirm({
      nzTitle: 'Do you want to logout?',
      nzOkText: 'Logout',
      nzOnOk: () => this.logout(),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  resetPasswordOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.resetPasswordModelVisible = false;
      this.isConfirmLoading = false;
    }, 3000);
  }

  resetPasswordCancel(): void {
    this.resetPasswordModelVisible = false;
  }

  logout() {
    this.credentialsService.logoutUser();
  }

  showResetPasswordModal(): void {
    this.validateForm.reset();
    this.resetPasswordModelVisible = true;
  }


  submitForm(value: any): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    console.log(value);
  }


  validateConfirmPassword(): void {
    setTimeout(() => this.validateForm.controls.confirmPassword.updateValueAndValidity());
  }

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return {error: true, required: true};
    } else if (control.value !== this.validateForm.controls.newPassword.value) {
      return {confirm: true, error: true};
    }
    return {};
  };
}
