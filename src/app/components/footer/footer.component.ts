import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(public fb: FormBuilder){
    this.subscribeForm = this.fb.group({
      email: ['',Validators.required,Validators.email]
    });
    
  }
  subscribeForm!: FormGroup;
  submitted: boolean = false;
  socialLinks = ['assets/images/social/whatsapp.png','assets/images/social/youtube.png', 'assets/images/social/facebook.png', 'assets/images/social/instagram.png']
  footerLinks = [
    {
      title: "Products",
      links: [
        {
          title: 'Skincare',
          link: 'products'
        },
        {
          title: 'Make Up',
          link: 'products'
        },
        {
          title: 'Shampoo',
          link: 'products'
        },
      ]
    },
    {
      title: "About Us",
      links: [
        {
          title: 'Our Shop',
          link: 'about'
        },
        {
          title: 'Career',
          link: 'about'
        },
        {
          title: 'Specialist',
          link: 'about'
        },
      ]
    },
    {
      title: "Support",
      links: [
        {
          title: 'Blog',
          link: ''
        },
        {
          title: 'Help',
          link: ''
        },
        {
          title: 'FAQs',
          link: ''
        },
      ]
    },
  ]

  subscribe(){
    console.log(this.subscribeForm.value);
    this.submitted = true;
    setTimeout(() => {
      this.submitted = false;
    }, 3000);
  }
}
