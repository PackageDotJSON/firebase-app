import { Component } from '@angular/core';
import { ROUTES } from 'src/app/enums/routes.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  readonly homeRoute = ROUTES.HOME_ROUTE;
  readonly messageRoute = ROUTES.MESSAGE_ROUTE;
}
