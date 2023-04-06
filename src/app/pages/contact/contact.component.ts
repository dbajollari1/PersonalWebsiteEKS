import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm, AbstractControl } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private contactSrvc: ContactService, private router: Router) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', [Validators.required]), 
      message: new FormControl('', [Validators.required])
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }

  async onSubmit(): Promise<void> {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }
    console.log(JSON.stringify(this.contactForm.value, null, 2));
    try{
      await this.contactSrvc.sendEmail(this.f['name'].value,this.f['email'].value,this.f['subject'].value,this.f['message'].value);
      this.contactForm.reset();
      this.submitted = false;
      alert("Thank you for contacting me!")
      this.router.navigate(['/']);
    }
    catch (error:any){
      alert("Oops something went wrong. Please try again later. ")
    };
  }

}
