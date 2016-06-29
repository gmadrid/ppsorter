import { Component } from '@angular/core';
import { MessageService } from './message.service';
import { PPSStatusComponent } from './ppsstatus/ppsstatus.component'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ PPSStatusComponent ],
  providers: [ MessageService ]
})
export class AppComponent {
	constructor() {}
}
