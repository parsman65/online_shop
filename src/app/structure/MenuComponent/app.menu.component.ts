import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {StructureService} from "../structure.service";

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

  ngOnInit(): void {
    this.menuWidthSubs = this.structureService.contentWidth.subscribe(res => {
      this.menuWidth = res;
    })
  }

  ngOnDestroy(): void {
  }



}
