import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-about-page',
  template: '',
})
export class AboutPageComponent implements OnInit {

constructor(private router: Router){}

  ngOnInit(): void {
    this.router.navigateByUrl('/');
  }


}
