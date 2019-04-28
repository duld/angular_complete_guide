import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() appSelect: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelect(feature: string) {
    this.appSelect.emit(feature);
  }
}
