import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.page.html',
  styleUrls: ['./navigation.page.scss'],
})
export class NavigationPage implements OnInit {

  public MainNav = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'About', url: '/about', icon: 'people' },
    { title: 'Contact', url: '/contact', icon: 'call' },
    { title: 'Gallery', url: '/gallery', icon: 'images' },
    { title: 'Setting', url: '/setting', icon: 'settings' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
