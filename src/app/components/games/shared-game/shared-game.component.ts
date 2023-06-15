import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shared-game',
  templateUrl: './shared-game.component.html',
  styleUrls: ['./shared-game.component.css']
})
export class SharedGameComponent implements OnInit {
  @Input() gameName: string = '';

  constructor() { }

  ngOnInit(): void {

  }

}
