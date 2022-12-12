import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AdminComponent } from './admin/admin.component';
// import { EmployeeComponent } from './employee/employee.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    // {path: 'register', component:RegisterComponent},
    {path: 'homepage', component:HomePageComponent},
    {path: 'login', component:LoginComponent}
    // {path: 'admin', component:AdminComponent},
    // {path: 'employee', component:EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [, HomePageComponent, LoginComponent]

