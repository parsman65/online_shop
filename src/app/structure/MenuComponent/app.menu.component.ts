import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {StructureService} from "../structure.service";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
  styleUrls: ['./app.menu.component.css']
})
export class AppMenuComponent implements OnInit, OnDestroy{

  constructor(private structureService: StructureService) {
  }

  menuWidthSubs: Subscription;
  menuWidth: string;
  items: MenuItem[] | undefined;

  ngOnInit(): void {

    this.items = [
      {
        label: 'اسناد',
        items: [
          {
            label: 'جدیدترین ها',
            icon: 'pi pi-plus'
          },
          {
            label: 'جستجو',
            icon: 'pi pi-search'
          }
        ]
      },
      {
        label: 'پروفایل',
        items: [
          {
            label: 'تنظیمات',
            icon: 'pi pi-cog'
          },
          {
            label: 'خروج',
            icon: 'pi pi-sign-out'
          }
        ]
      }
    ];

    this.menuWidthSubs = this.structureService.contentWidth.subscribe(res => {
      this.menuWidth = res;
    })
  }

  ngOnDestroy(): void {
  }


  getDisplay() {
    if (this.menuWidth == '0')
      return 'none';
    else return null;
  }
}
