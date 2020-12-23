import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup :FormGroup;
  constructor(private formBuilder: FormBuilder,private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      user: this.formBuilder.group({
        username: [''],
        password: ['']
      })
    });
  }

  loginUser() {

    const formGroup = this.loginFormGroup.get('user');
    const username = formGroup.value.username;
    const password = formGroup.value.password;

    console.log("Handling the subimt button User is : ");
    console.log(this.loginFormGroup.get('user').value);
    console.log(`username :${username} password : ${password}`)

    this.auth.getUserDetails(username,password).subscribe(
      data=>{
        console.log(`data : ${data}`)
        this.router.navigate(["/product"])
      },error=>console.log("error ")
    )
  }
}
