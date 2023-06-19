import { Component } from '@angular/core';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent {

  routeToInfo(audioKey: string) {
    // send request to server so audio plays
    // make sure to implement some kind of buffer so that the server doesn't get overloaded
    console.log('audio is playing for: ', audioKey);
  }
}
