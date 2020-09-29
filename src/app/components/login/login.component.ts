import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public loginForm: FormGroup;
  public userName: FormControl;
  public roomName: FormControl;

  constructor(
    private formBuilder:FormBuilder,
    private router: Router
    ) {
      this.loginForm = formBuilder.group({
        userName: this.userName = new FormControl('', Validators.required),
        roomName: this.roomName = new FormControl('', Validators.required)
      })
  }

  ngOnInit(): void {
  }

  createRoom() {
    let userName = this.loginForm.get('userName').value;
    let roomName = this.loginForm.get('roomName').value;
    if(this.loginForm.valid) {
      //TO-DO create service to send data to server
    }
  }

}
