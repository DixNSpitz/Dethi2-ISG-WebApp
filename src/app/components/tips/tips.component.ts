import {Component} from '@angular/core';
import {Router} from "@angular/router";

type InfoKey = 'tomato' | 'chili' | 'aloe' | 'illness' | 'fertilizer' | 'water';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent {

  tipScreenMap = {
    'tomato': { 'tipScreenImageUrl': 'assets/screens/tomato.png', 'screenTitle': 'Tomaten' },
    'chili': { 'tipScreenImageUrl': 'assets/screens/chili.png', 'screenTitle': 'Chilis' },
    'aloe': { 'tipScreenImageUrl': 'assets/screens/aloe.png', 'screenTitle': 'Aloe' },
    'illness': { 'tipScreenImageUrl': 'assets/screens/illness.png', 'screenTitle': 'Krankheiten' },
    'fertilizer': { 'tipScreenImageUrl': 'assets/screens/fertilizer.png', 'screenTitle': 'Dünger' },
    'water': { 'tipScreenImageUrl': 'assets/screens/water.png', 'screenTitle': 'Wasser' },
  }

  constructor(private router: Router) {
  }

  routeToInfo(infoKey: InfoKey) {
    this.router.navigate(['/sharedTipsPage'], {
      queryParams: {
        tipKey: infoKey,
        tipScreenTitle: this.tipScreenMap[infoKey].screenTitle,
        tipScreenImageUrl: this.tipScreenMap[infoKey].tipScreenImageUrl,
      }
    });
  }
}
