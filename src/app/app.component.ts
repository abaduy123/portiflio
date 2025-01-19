import { Component , ElementRef, Renderer2, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMoon , faSun } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { HeroComponent } from './hero/hero.component';
import { TechComponent } from './tech/tech.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, HeroComponent, TechComponent, ProjectsComponent, FooterComponent, AboutComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  faMoon = faMoon;
  faSun = faSun;
  faBars = faBars;
 @ViewChild("mobileNav") mobileNav!:ElementRef;
 
 
 
  constructor(private renderer:Renderer2){

  }
  
  showMobileNav() {
    if(this.mobileNav.nativeElement.style.display != "flex")
      this.mobileNav.nativeElement.style.display = "flex";
    else
      this.mobileNav.nativeElement.style.display = "none"
    
    

    
  }
  closeMobileNav() {
    this.mobileNav.nativeElement.style.display = "none";
  }
}
