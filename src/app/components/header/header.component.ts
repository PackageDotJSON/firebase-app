import { Component, OnInit } from '@angular/core';
import { ROUTES } from 'src/app/enums/routes.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  readonly homeRoute = ROUTES.HOME_ROUTE;
  readonly messageRoute = ROUTES.MESSAGE_ROUTE;

  constructor() {}

  ngOnInit(): void {}
}
