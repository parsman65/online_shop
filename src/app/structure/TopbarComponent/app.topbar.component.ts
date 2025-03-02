import {Component, OnDestroy, OnInit} from '@angular/core';
import {StructureService} from "../structure.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html',
  styleUrls: ['./app.topbar.component.css']
})
export class AppTopbarComponent implements OnInit, OnDestroy {

  contentWidthSubs: Subscription;
  contentWidth: string;

  constructor(private structureService: StructureService) {}



  clickOnBars() {
    if (this.contentWidth == '0')
      this.structureService.contentWidth.next('22rem')
    else
      this.structureService.contentWidth.next('0');
  }



  ngOnInit(): void {
    this.contentWidthSubs = this.structureService.contentWidth.subscribe(res => {
      this.contentWidth = res;
    })
  }

  ngOnDestroy(): void {
    this.contentWidthSubs.unsubscribe();
  }
}
