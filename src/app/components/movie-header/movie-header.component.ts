import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-movie-header',
  templateUrl: './movie-header.component.html',
  styleUrls: ['./movie-header.component.scss']
})
export class MovieHeaderComponent implements OnInit {

  @Output() searchChanged: EventEmitter<string> = new EventEmitter<string>();
  searching = false;

  constructor() { }

  ngOnInit() {
  }

}
