import { Component , ElementRef, ViewChild , AfterViewInit} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHtml5 , faJs , faAngular, faGithub ,faNode} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-tech',
  standalone: true,
  imports: [FontAwesomeModule ,  ],
  templateUrl: './tech.component.html',
  styleUrl: './tech.component.css'
})
export class TechComponent { 
faHtml5 = faHtml5; 
faJs = faJs;
faAngular = faAngular;
faGithub = faGithub;
faNode = faNode;


@ViewChild("techWrapper") techWrapper!:ElementRef
@ViewChild("sliderWrapper") sliderWrapper!:ElementRef


addDublicateElementsForAnimation(){
  const techWrapper = this.techWrapper.nativeElement;
  const sliderWrapper = this.sliderWrapper.nativeElement;
  if (!sliderWrapper.querySelector('.duplicate')) {
    const duplicate = techWrapper.cloneNode(true);
    duplicate.classList.add('duplicate'); // Add a class to mark it as a duplicate
    sliderWrapper.appendChild(duplicate);
  }
}

ngAfterViewInit(){
  this.addDublicateElementsForAnimation();
}

}