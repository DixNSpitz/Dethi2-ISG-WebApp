import {Component, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-shared-tips-page',
  templateUrl: './shared-tips-page.component.html',
  styleUrls: ['./shared-tips-page.component.css']
})
export class SharedTipsPageComponent {
  private tipKey: string = '';
  public tipScreenTitle: string = '';
  public tipScreenImageUrl: string = '';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.tipKey = params['tipKey']; // logs the key from infoScreenMap
      this.tipScreenTitle = params['tipScreenTitle']; // logs the value from infoScreenMap
      this.tipScreenImageUrl = params['tipScreenImageUrl']; // logs the value from infoScreenMap
      console.log(params, this.tipScreenImageUrl);
    });
  }
}
