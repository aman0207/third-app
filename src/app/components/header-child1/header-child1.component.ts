import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-child1',
  templateUrl: './header-child1.component.html',
  styleUrls: ['./header-child1.component.css']
})
export class HeaderChild1Component implements OnInit {

  @Input() parentMsg: string;
  constructor() { }

  ngOnInit() {
  }

}
