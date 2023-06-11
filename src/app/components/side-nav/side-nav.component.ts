import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  menuSidebar = [
    {
      link_name: 'Dashboard',
      link: '/dashboard',
      icon: 'home',
      sub_menu: [],
    },
    {
      link_name: 'Analytics',
      link: '/wallet',
      icon: 'wallet',
      sub_menu: [],
    },
  ];
  constructor() {}
}
