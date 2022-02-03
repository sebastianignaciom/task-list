import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string;

  constructor() { 

    this.title = 'My Task list';

  }

  ngOnInit(): void {
  }

}
