import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-movie-list-loader',
  templateUrl: './movie-list-loader.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./movie-list-loader.component.less']
})
export class MovieListLoaderComponent  {

  @Input() elementsLoaded: boolean;
  @Input() hasMoreElementsToLoad: boolean;
  @Input() hasNoElements: boolean;

  constructor() {}

}
