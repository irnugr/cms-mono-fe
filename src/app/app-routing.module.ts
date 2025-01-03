import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SidebarHomeMenuComponent } from "./sidebar-home-menu/sidebar-home-menu.component";
import { UserListsComponent } from './components/user-lists/user-lists.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'sidebar-home',
    component: SidebarHomeMenuComponent,
    children: [
      { path: 'user-lists', component: UserListsComponent },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
