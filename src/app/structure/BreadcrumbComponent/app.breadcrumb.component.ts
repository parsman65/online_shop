import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './app.breadcrumb.component.html',
  styleUrls: ['./app.breadcrumb.component.css']
})
export class AppBreadcrumbComponent implements OnInit{

  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  ngOnInit(): void {
    this.items = [
      { label: 'Electronics' },
      { label: 'Computer' },
      { label: 'Accessories' },
      { label: 'Keyboard' },
      { label: 'Wireless' }
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/' };

  }

}
