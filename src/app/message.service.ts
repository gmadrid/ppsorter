/// <reference path="../../../../../typings/globals/baconjs/index.d.ts" />
import { Injectable } from '@angular/core';

import * as Bacon from 'baconjs';

@Injectable()
export class MessageService {

	public message: any; 

	private sinkFunction: any = null;

	constructor() {
		this.message = Bacon.fromBinder(function(sink) {
			this.sinkFunction = sink;
			sink('');
			return function() { /* a no-op */ }
		}.bind(this));
	}

	AddMessage(msg: String) {
		this.sinkFunction(msg);
	}

}
