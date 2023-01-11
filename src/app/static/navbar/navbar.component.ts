import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  show: boolean = false;
  showNavbar() {
    this.show = !this.show;
  }

  closeNavbar() {
    this.show = false;
  }
}
