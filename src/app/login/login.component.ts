import { Component } from '@angular/core';

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

  constructor(private _auth: AuthService) { }

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
      res => console.log(res),
      err => console.log(err)
    )

    
  
  }
  register(){
    console.log(localStorage.getItem('registerUsers'))
  }


}
