import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-vertical-menu',
  standalone: true,
  imports: [CommonModule, RouterLink ,],
  templateUrl: './vertical-menu.html',
  styleUrls: ['./vertical-menu.css']
})
export class VerticalMenu {

  openedMenu: string | null = null;
  openedSubMenu: string | null = null;
  openedSubMenuFlyout: string | null = null;

  collapsed = false;

  toggle(menu: string) {
    this.openedMenu = this.openedMenu === menu ? null : menu;
  }

  toggleSub(menu: string) {
    this.openedSubMenu =
      this.openedSubMenu === menu ? null : menu;
  }

  // 
  toggleSubmenu(menu: string) {
    this.openedSubMenuFlyout =
      this.openedSubMenuFlyout === menu ? null : menu;
  }

  isOpen(menu: string) {
    return this.openedMenu === menu;
  }

  isSubOpen(menu: string) {
    return this.openedSubMenu === menu;
  }

  // 
  isSubMenuOpen(menu: string) {
    return this.openedSubMenuFlyout === menu;
  }

  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }

}