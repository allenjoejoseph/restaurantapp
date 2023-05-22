import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user:any
  userData={}

  registerForm = this.registerFB.group({
    email:['',[Validators.required]],
    password:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
  })

  constructor(private registerFB:FormBuilder, private api : ApiService, private route:Router){

  }


  register(){
    if(this.registerForm.valid){
      let email = this.registerForm.value.email
      let password= this.registerForm.value.password

      this.api.register(email,password).subscribe(
        (result:any)=>{
          alert('Registration Successful')
          this.route.navigateByUrl('/items/login')
        },
        (result:any)=>{
          alert('User already exists! Continue to login.')
          this.route.navigateByUrl('items/login')
        }
      )
    }
    else{
      alert('Invalid Credentials')
    }
  }

  navigatetologin(){
    this.route.navigateByUrl('/items/login')
  }
}
