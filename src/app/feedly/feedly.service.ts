// <reference path="../../../../../../typings/globals/baconjs/index.d.ts" />

import { Injectable } from '@angular/core';

import {EventStream} from 'baconjs';

export class Entry {
  constructor(public id: string) {}
}

class FeedlyClient {
  private userId: string = 'cceea348-110d-4606-92d0-8480ea8c8b10';
  private accessToken: string = 'A0NmaqxAx3bTtnAXo36nJHOyGcx';
}


@Injectable()
export class FeedlyService {

  public entries: EventStream<any,Entry>;

//  private feedly: Feedly;

  constructor() {
//      console.log(Feedly.foofoo);
//    this.feedly = Feedly.new({});
//    new Feedly()
  }

}
