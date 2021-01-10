import { Component, OnInit } from '@angular/core';
import {Game} from '../model/game.model';
import {GameService} from '../services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {
games: Game[];
  constructor(private gameService: GameService) {
    this.games = gameService.getGames();
  }
  deleteGame(game: Game): void {
    const conf = confirm('Etes-vous sûr ?');
    if (conf) {
       this.gameService.deleteGame(game);
    }
}


  ngOnInit(): void {
  }

}
