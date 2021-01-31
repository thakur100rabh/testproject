import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Menu',  icon: 'pe-7s-menu', class: '' },
    { path: '/user', title: 'Portal Event',  icon:'pe-7s-user', class: '' },
    { path: '/dashboard', title: 'Partner Management',  icon:'pe-7s-note2', class: '' },
    { path: '/dashboard', title: 'Analytics',  icon:'pe-7s-news-paper', class: '' },
    { path: '/dashboard', title: 'History',  icon:'pe-7s-science', class: '' },
    { path: '/dashboard', title: 'Feedback',  icon:'pe-7s-map-marker', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
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
