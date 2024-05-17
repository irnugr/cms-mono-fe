import { Component } from '@angular/core';
import { IconsService } from "./services/icons.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-new-cms';

  constructor(private iconService: IconsService) {}
}
