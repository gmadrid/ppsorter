/* tslint:disable:no-unused-variable */
import {beforeEach, beforeEachProviders, describe, xdescribe, expect, it, xit, async, inject} from '@angular/core/testing';

import {EntryService} from './entry.service';
import {Entry} from './feedly/feedly.service';

describe('Entry Service', () => {
  beforeEachProviders(() => [EntryService]);

  let entry1 = new Entry('e1');
  let entry2 = new Entry('e2');
  let entry3 = new Entry('e3');
  let entry4 = new Entry('e4');
  let entry5 = new Entry('e5');
  let entry6 = new Entry('e6');

  function CheckIds(entries, ids) {
    expect(entries.map(e => { return e.id; })).toEqual(ids);
  }

  it('should be creatable', inject([EntryService], (service: EntryService) => {
       expect(service).toBeTruthy();
     }));

  it('should start with an empty array.',
     inject([EntryService], (service: EntryService) => {
       service.entries.onValue((value) => { expect(value).toEqual([]); });
     }));

  it('should be changeable', inject([EntryService], (service: EntryService) => {
       let receivedValue = [];
       service.entries.onValue((value) => { receivedValue = value; })
       service.AddEntries([entry1, entry2]);
       CheckIds(receivedValue, ['e1', 'e2']);

       service.AddEntries([entry3, entry4]);
       CheckIds(receivedValue, ['e1', 'e2', 'e3', 'e4']);
     }));

  it('should have a selection',
     inject([EntryService], (service: EntryService) => {
       let selectedEntries;
       service.selectedEntries.onValue((value) => { selectedEntries = value; });
       service.AddEntries([entry1, entry2, entry3, entry4, entry5, entry6]);
       CheckIds(selectedEntries, []);

       service.AddSelection('e1');
       service.AddSelection('e3');
       service.AddSelection('e3');
       service.AddSelection('e4');
       CheckIds(selectedEntries, ['e1', 'e3', 'e4']);

       service.RemoveSelection('e3');
       CheckIds(selectedEntries, ['e1', 'e4']);
     }));
});
