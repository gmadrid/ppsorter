/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { EntryService } from './entry.service';

describe('Entry Service', () => {
  beforeEachProviders(() => [EntryService]);

  it('should ...',
      inject([EntryService], (service: EntryService) => {
    expect(service).toBeTruthy();
  }));
});
