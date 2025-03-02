import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StructureService {

  contentWidth = new BehaviorSubject<string>('0');

  constructor() { }
}
