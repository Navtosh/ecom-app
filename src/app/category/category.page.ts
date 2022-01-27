import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  showSearchbar: boolean = false;

 
  constructor() { }

  ngOnInit() {
  }

  toggleSearchbar() {
    this.showSearchbar = !this.showSearchbar;
}

}
