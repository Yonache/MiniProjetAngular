import { Injectable } from '@angular/core';
import { Game } from '../model/game.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  games : Game[]; 
  game = new Game();
  constructor() {
    this.games = [
      { gameId : 1,  gameName : "Game 1", gamePrice : 3000.600, orderDate : new Date("01/14/2011")},
      { gameId : 2,  gameName : "Game 2", gamePrice : 900, orderDate : new Date("12/17/2010")},
      { gameId : 3,  gameName :"Game 3", gamePrice : 888, orderDate : new Date("02/20/2020")}
    ];
   }
   getGames():Game[] {
      return this.games;
    }

    addGame( game: Game){
      this.games.push(game);
    }

    deleteGame( game: Game){
      const index = this.games.indexOf(game, 0);
      if (index > -1) {
        this.games.splice(index, 1);
      }

    }

    getGameById(id:number): Game{    
     this.game =  this.games.find(p => p.gameId == id);
       return this.game;
    }

   
    filterGames(){
      this.games = this.games.sort((n1,n2) => {
        if (n1.gameId > n2.gameId) {
            return 1;
        }
    
        if (n1.gameId < n2.gameId) {
            return -1;
        }
    
        return 0;
    });
    }
    
    updateGame(games:Game)
    {
      this.deleteGame(games);
      this.addGame(games);
      this.filterGames();
    }

   

}
