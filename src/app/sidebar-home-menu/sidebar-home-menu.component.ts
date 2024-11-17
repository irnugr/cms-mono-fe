import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-sidebar-home-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-home-menu.component.html',
  styleUrl: './sidebar-home-menu.component.scss'
})
export class SidebarHomeMenuComponent {

  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
