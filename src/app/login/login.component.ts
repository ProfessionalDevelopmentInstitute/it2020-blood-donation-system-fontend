import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginManagerService} from '../service/login-manager.service';
import {LoginModel} from '../model/login.model';
import {ApiService} from '../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private loginManager: LoginManagerService, private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    });
  }

  summit(): void {
    const loginModel: LoginModel = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    this.loginManager.signIn(loginModel).subscribe(
      value => {
        this.router.navigate(['alldonor']);
      },
      error => console.log(error),
    );
  }

}
