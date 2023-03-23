import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  membershipForm!: FormGroup;
  constructor(private fb: FormBuilder){
    this.membershipForm = fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',Validators.required, Validators.email],
      number: ['', Validators.required],
      message: ['',],
    });
  }

  membershipSubmit(){
    console.log(this.membershipForm.value);
  }
}
