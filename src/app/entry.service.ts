/// <reference path="../../../../../typings/globals/baconjs/index.d.ts" />
import { Injectable } from '@angular/core';
import { Bus, Property } from 'baconjs';

import { Entry } from './entry'

type ChangeFunc = (oldEntries: Array<Entry>)=>Array<Entry>;
type IdChangeFunc = (oldIds: Array<string>)=>Array<string>;

@Injectable()
export class EntryService {

	// Property containing Array of Entries in the service.
	public entries: Property<any, Array<Entry>>;
	// Property containing Array of Entries that are selected.
	public selectedEntries: Property<any, Array<Entry>>;

	// Change the list of entries by pushing a ChangeFunc.
	private entryChanges: Bus<any, ChangeFunc> = new Bus();

	// Property of the ids of the entries which have been selected.
	private selectedIds: Property<any, Array<string>>;
	// Change the selectedIds by pushing an IdChangeFunc.
	private selectedChanges: Bus<any, IdChangeFunc> = new Bus();

  constructor() {
  	this.entries = this.entryChanges.scan([], (oldEntries, f: ChangeFunc) => {
  		return f(oldEntries);
  	});

  	this.selectedIds = this.selectedChanges.scan([], (oldIds, f: IdChangeFunc) => {
  		return f(oldIds);
  	});

  	this.selectedEntries = this.selectedIds.combine(this.entries, (ids, entries) => {
  		// Filter all of the entries whose ids are not in selectedIds.
  		return entries.filter(e => {
  			return ids.indexOf(e.id) != -1;
  		}, this);
  	});
  }

  AddEntries(entries: [Entry]): void {
  	this.entryChanges.push((oldEntries: [Entry]) => {
  		return oldEntries.concat(entries);
	  });
  }

  AddSelection(id: string) { 
  	this.selectedChanges.push((oldIds: [string]) => {
  		return oldIds.concat(id);
	});
  }

  RemoveSelection(id: string) {
  	this.selectedChanges.push((oldIds: [string]) => {
  		return oldIds.filter((oldId: string) => {
  			return oldId != id;
  		});
  	});
  }
}
