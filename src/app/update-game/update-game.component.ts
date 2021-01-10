import { Component, OnInit } from '@angular/core';
import {Game} from '../model/game.model';
import {GameService} from '../services/game.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-update-game',
  templateUrl: './update-game.component.html',
  styles: [
  ]
})
export class UpdateGameComponent implements OnInit {
currentGame = new Game();
  constructor(private activatedRoute: ActivatedRoute,
              private gameService: GameService) { }

  ngOnInit(): void {
    this.currentGame = this.gameService.getGameById(this.activatedRoute.snapshot.params.id);
    console.log(this.currentGame);
  }
  updateGame(): void {
this.gameService.updateGame(this.currentGame);
}


}
