/// <reference path="../../../../../typings/globals/baconjs/index.d.ts" />
import { Injectable } from '@angular/core';
import { Bus, Property } from 'baconjs';

@Injectable()
export class MessageService {

  private messageBus: Bus<any,string> = new Bus();
  public message: Property<any,string>;

	constructor() {
    this.message = this.messageBus.toProperty('');
	}

	AddMessage(msg: string) {
    this.messageBus.push(msg);
	}

}
