import { Component, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  show: boolean = false;
  fixed: boolean = false;
  showNavbar() {
    this.show = !this.show;
  }

  closeNavbar() {
    this.show = false;
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    window.scrollY > 500 ? this.fixed = true : this.fixed = false;
  }
}
