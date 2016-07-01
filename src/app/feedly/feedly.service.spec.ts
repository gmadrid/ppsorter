/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { FeedlyService } from './feedly.service';

describe('Feedly Service', () => {
  beforeEachProviders(() => [FeedlyService]);

  it('should ...',
      inject([FeedlyService], (service: FeedlyService) => {
    expect(service).toBeTruthy();
  }));
});
