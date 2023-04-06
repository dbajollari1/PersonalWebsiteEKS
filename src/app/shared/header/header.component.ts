import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  collapseNav() {
    //console.log(this.classExpression);
    //this.classExpression = "navbar-collapse collapse";
    document.getElementsByName('navbarText')[0].classList.remove('show'); 
  }

}
