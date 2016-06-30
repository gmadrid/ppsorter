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

  it('should interact with the MessageService', () => {
    return tcb.createAsync(PPSStatusComponent).then(fixture => {
      let component = fixture.componentInstance;
      let nativeElement = fixture.nativeElement;

      it('by hiding the message when it is empty', () => {
        expect(component.message).toEqual('');
        expect(nativeElement.querySelector('#msg')).toBe(null);
      });

      it('by showing the message when it is not null', () => {
        let newValue = 'xiexie';
        ms.AddMessage(newValue);
        fixture.detectChanges();

        expect(component.message).toEqual(newValue);
        let el = nativeElement.querySelector('#msg');
        expect(el).not.toBe(null);
        expect(el.innerHTML).toContain(newValue);
      });
    })
  });

});
