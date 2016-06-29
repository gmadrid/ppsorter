import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  moduleId: module.id,
  selector: 'pps-status',
  templateUrl: 'ppsstatus.component.html',
  styles: []
})
export class PPSStatusComponent implements OnInit {

  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }

}
