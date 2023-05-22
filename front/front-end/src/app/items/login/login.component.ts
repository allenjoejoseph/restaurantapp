import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email:any
  password:any

  constructor(private api:ApiService, private router:Router, private activatedRoute:ActivatedRoute,private loginFb:FormBuilder){

  }

  loginForm = this.loginFb.group({
    email:['',[Validators.required]],
    password:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
  })


//login
login(){
  if(this.loginForm.valid){
    let email = this.loginForm.value.email
    let password= this.loginForm.value.password
    this.api.login(email,password).subscribe(
      (result:any)=>{
        console.log(result);
        
        if(result){
          this.router.navigateByUrl('')
        }
        else{
          alert('Invalid Credentials')
        }
    })
}
}
}