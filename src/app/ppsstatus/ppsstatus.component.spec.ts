/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MessageService } from '../message.service';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject, injectAsync
} from '@angular/core/testing';
import {
  TestComponentBuilder
} from '@angular/compiler/testing';

import { PPSStatusComponent } from './ppsstatus.component';

describe('Component: PPSStatus', () => {
  // Injected before every test.
  let tcb: TestComponentBuilder;
  let ms: MessageService;

  var component: PPSStatusComponent;

  beforeEachProviders(() => [TestComponentBuilder, PPSStatusComponent, MessageService]);

  beforeEach(inject([TestComponentBuilder, MessageService], (_tcb, _ms) => {
    tcb = _tcb;
    ms = _ms;
  }));

  it('should be constructable', () => {
    tcb.createAsync(PPSStatusComponent).then(fixture => {
      let component = fixture.componentInstance;
      expect(component).toBeTruthy();
    })
  });

  it('should get the message from the MessageService', () => {
    return tcb.createAsync(PPSStatusComponent).then(fixture => {
        let component = fixture.componentInstance;
        expect(component.message).toEqual('');
        let newValue = 'xiexie';
        ms.AddMessage(newValue);
        expect(component.message).toEqual(newValue);
    })
  });

});
