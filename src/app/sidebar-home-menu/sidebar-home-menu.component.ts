import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MenuService } from "../services/menu.service";
import { MenuItem } from "../models/menu-item.model";

@Component({
  selector: 'app-sidebar-home-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-home-menu.component.html',
  styleUrls: ['./sidebar-home-menu.component.scss'] // Fixed typo: styleUrl -> styleUrls
})
export class SidebarHomeMenuComponent implements OnInit {

  constructor(private menuService: MenuService) {}

  menuItems: MenuItem[] = [];
  isSidebarOpen = true;
  isMenuOpen = false;

  ngOnInit(): void {
    this.menuService.getMenus().subscribe(menus => {
      this.menuItems = this.sortMenuTree(menus);
    });
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  toggleUserMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleExpand(menu: MenuItem): void {
    menu.expanded = !menu.expanded;
  }

  //To close opened user menu
  @HostListener('document:click', ['$event'])
  closeUserMenu(event: Event): void {
    const target = event.target as HTMLElement;
    // Check if the click is outside the menu and toggle button
    if (!target.closest('.user-menu') && !target.closest('.user-menu-toggle')) {
      this.isMenuOpen = false;
    }
  }

  sortMenuTree(menus: MenuItem[]): MenuItem[] {
    const sortMenus = (a: MenuItem, b: MenuItem) => a.menu_order - b.menu_order;

    // Recursively sort child menus
    const sortChildMenus = (menu: MenuItem) => {
      menu.child_menus?.sort(sortMenus);
      menu.child_menus?.forEach(sortChildMenus);
    };

    menus.forEach(sortChildMenus);
    menus.sort(sortMenus);

    return menus;
  }
}
