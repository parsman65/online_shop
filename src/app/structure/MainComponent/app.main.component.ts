import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs";
import {StructureService} from "../structure.service";

@Component({
  selector: 'app-main',
  templateUrl: 'app.main.component.html',
  styleUrls: ['app.main.component.css']
})

export class AppMainComponent implements OnInit, OnDestroy{

  constructor(private structureService: StructureService) {

  }

  contentWidthSubs: Subscription;
  contentWidth: string;

  ngOnInit(): void {
    this.contentWidthSubs = this.structureService.contentWidth.subscribe(res => {
      this.contentWidth = 'calc(100%-)';
    })
  }

  ngOnDestroy(): void {
    this.contentWidthSubs.unsubscribe();
  }



}
