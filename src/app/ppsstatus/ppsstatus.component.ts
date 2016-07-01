import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

import {MessageService} from '../message.service';

@Component({
  moduleId: module.id,
  selector: 'pps-status',
  templateUrl: 'ppsstatus.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PPSStatusComponent implements OnInit {
  public message: String;
  public entryCount: number = 0;
  public selectedEntryCount: number = 0;

  constructor(public messageService: MessageService) {
    messageService.message.onValue((msg: String) => { this.message = msg; })
  }

  ngOnInit() {}
}
