/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { MessageService } from './message.service';

describe('Message Service', () => {
  beforeEachProviders(() => [MessageService]);

  it('should inject',
      inject([MessageService], (service: MessageService) => {
    expect(service).toBeTruthy();
  }));

  it('should start empty', 
  	inject([MessageService], (service: MessageService) => {
  		service.message.onValue((value: String) => {
  			expect(value).toEqual("")
  		})
  	}));

  it('should accept new messages',
  	inject([MessageService], (service: MessageService) => {
  		var values = [];
  		service.message.onValue((value: String) => {
  			values.push(value);
  		})
  		service.AddMessage('George');
  		service.AddMessage('Foobar');

  		expect(values).toEqual(['', 'George', 'Foobar']);
  	}))

  it('can unsubscribe',
  	inject([MessageService], (service: MessageService) => {
  		var values = [];
  		var unsub = service.message.onValue((value: String) => {
  			values.push(value);
  		})
  		service.AddMessage('George');
  		unsub();
  		service.AddMessage('Foobar');

  		expect(values).toEqual(['', 'George']);
  	}))

});
