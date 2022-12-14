import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  registerUsers: any[] = [];

  loginUserData: any = {
    email:"",
    password:""
  }
  
  registerObj: any={

  }

  constructor(private _auth: AuthService,
    private _router:Router){}
   

  ngOnInit(): void {
    const localData = localStorage.getItem('registerUsers');
    if(localData != null){
      this.registerUsers = JSON.parse(localData);
    }
  }

  onlogin(){
    // console.log(this.registerUsers)
     //console.log(this.loginUserData)
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {console.log(res)
        const onlytToken = res.token.split(" ");
        console.log(onlytToken)
        localStorage.setItem("token", onlytToken[0] );
        this._router.navigate(['/homepage']);
      },
      err => console.log(err)
    )

    
  
  }
  register(){
    console.log(localStorage.getItem('registerUsers'))
  }


}
