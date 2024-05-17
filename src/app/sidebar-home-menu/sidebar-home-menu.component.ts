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

  isSidebarClosed: boolean = false;
  isDropdownExpanded: boolean = false; // Add a new property to track the dropdown state

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }

  toggleDropdown() {
    this.isDropdownExpanded = !this.isDropdownExpanded;
  }

  dropdownOpen: boolean = false;

  toggleDropdownUser() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  isSidebarMobileViewClosed: boolean = true;

  toggleSidebarMobileView() {
    this.isSidebarMobileViewClosed = !this.isSidebarMobileViewClosed;
  }

}
