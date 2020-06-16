import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Add User & Add Item',  icon:'group_add', class: '' },
    // { path: '/start-shopping', title: 'Start Shopping',  icon:'assignment_turned_in', class: '' },
    // { path: '/notifications', title: 'Start Shopping',  icon:'assignment_turned_in', class: '' },
    { path: '/table-list', title: 'Item List',  icon:'storage', class: '' },
    { path: '/start-shopping', title: 'History',  icon:'local_atm', class: '' },
    { path: '/typography', title: 'User List',  icon:'perm_identity', class: '' },
    // { path: '/icons', title: 'Checkout',  icon:'local_hospital', class: '' },
    // { path: '/maps', title: 'Payments',  icon:'location_on', class: '' },
    // { path: '/notifications', title: 'Shipping',  icon:'notifications', class: '' },
    // { path: '/upgrade', title: 'LogOut',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
