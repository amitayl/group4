import { Component, OnDestroy } from '@angular/core';
import { GameService } from './game.service';
  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'ng-memory-game';

  constructor(private gameService: GameService) {}


  ngOnDestroy() {

  }
}

