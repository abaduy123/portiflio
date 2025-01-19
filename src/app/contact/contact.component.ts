import { Component, importProvidersFrom } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope , faCheckCircle , faXmarkCircle} from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { ReactiveFormsModule} from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  faEnvelope = faEnvelope;
  faWhatsapp = faWhatsapp;  
  faCheckCircle = faCheckCircle;
  faXmarkCircle = faXmarkCircle;
  isSent = false;
  err = false
  
  userEmails = new FormGroup({
    cEmail: new FormControl('',[
      Validators.required,
      Validators.email]),
    cName: new FormControl('',[ Validators.required]),
    cMessage: new FormControl('',[ Validators.required])})
  
  

  getContactInfo() {
  if(this.userEmails.get("cName")?.valid && this.userEmails.get("cEmail")?.valid && this.userEmails.get("cMessage")?.valid) {
    console.log(this.userEmails.get("cName")?.value + " " + this.userEmails.get("cEmail")?.value + " " + this.userEmails.get("cMessage")?.value)
    return {
      name: this.userEmails.get("cName")?.value,
      email: this.userEmails.get("cEmail")?.value,
      message: this.userEmails.get("cMessage")?.value
    } 
  }
  }
  sendEmail() {
    const contactInfo = this.getContactInfo();
    if(contactInfo) {
      emailjs.send('service_jf4bnti', 'template_oxiuma6', contactInfo, 'kLCSJh0_YtjpC0bnw')
      .then((result: EmailJSResponseStatus) => {
          if(result.text == "OK") {
           this.isSent = true;
           
            
            
          }
      }, (error) => {
          if(error.text)
            this.err = true;
      });
    }
  }
}


