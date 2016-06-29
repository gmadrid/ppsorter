/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { PPSStatusComponent } from './ppsstatus.component';

describe('Component: PPSStatus', () => {
  it('should create an instance', () => {
    let component = new PPSStatusComponent();
    expect(component).toBeTruthy();
  });
});
