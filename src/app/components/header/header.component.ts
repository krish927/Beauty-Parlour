import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  navLinks = [
    {
      title: 'Home',
      link: 'home',
    },
    {
      title: 'About',
      link: 'about',
    },
    {
      title: 'Services',
      link: 'services',
    },
    {
      title: 'Products',
      link: 'products',
    },
    {
      title: 'Contact',
      link: 'contact',
    },
    ]
}
