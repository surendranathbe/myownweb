import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EducationdeatilsComponent } from './educationdeatils/educationdeatils.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'educationdeatils',component:EducationdeatilsComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'profile',component:ProfileComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
