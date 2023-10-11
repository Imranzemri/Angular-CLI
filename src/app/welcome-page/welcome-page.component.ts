import { Component,OnInit ,Renderer2, ElementRef} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
  ngOnInit(): void {
    // Add the 'active' class to trigger the fading effect
    setTimeout(() => {
      document.querySelector('article')?.classList.add('active');
    }, 0);
  }
  isOpenSideBar:boolean=false;
  toggleSidebar() {
    this.isOpenSideBar = !this.isOpenSideBar;
  }

  // Function to close the sidebar
  closeSidebar() {
    this.isOpenSideBar = false;
  }
}

 