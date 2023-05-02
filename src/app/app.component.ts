import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'myApp';
  // str1 = 'This is string one.';
  // str2 = '/n' + 'This is string Two.';
  // str3 = '/n' + 'This is string Three.';
  // strR = this.str1.concat(this.str2.toString());
  // strResult = this.strR.concat(this.str3.toString());
  // tooltipAbovemsg = this.strResult;

  str = 'This is string one.\n This is string Two. \n This is string Three.';

  matTooltipContent = 'Line 1 comment\nLine 2 comment\nLine 3 comment';
}
