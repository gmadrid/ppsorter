/// <reference path="../../../../../../typings/globals/baconjs/index.d.ts" />
import * as Bacon from 'baconjs';

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  moduleId: module.id,
  selector: 'pps-status',
  templateUrl: 'ppsstatus.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PPSStatusComponent implements OnInit {
	public message: String;

  constructor(public messageService: MessageService) {
  	messageService.message.onValue((msg: String) => {
  		this.message = msg;
  	})
  }

  ngOnInit() {
  }

  clicked() {
  	this.messageService.AddMessage("BOOBOO");
  	console.log("CLICKED");
  }
}
