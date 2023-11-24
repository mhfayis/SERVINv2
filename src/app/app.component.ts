import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'SERVIN';
  sidebarVisible = false;
  showFiller = false;

  @ViewChild('drawerref') drawerref: any;

  toggle() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
