/// <reference path="../../../../../typings/globals/baconjs/index.d.ts" />
import { Injectable } from '@angular/core';

import * as Bacon from 'baconjs';

@Injectable()
export class MessageService {

  private messageBus: Bacon.Bus<any,string> = new Bacon.Bus();
  public message: Bacon.Property<any,string>;

	constructor() {
    this.message = this.messageBus.toProperty('');
	}

	AddMessage(msg: string) {
    this.messageBus.push(msg);
	}

}
