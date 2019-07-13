import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Game } from 'src/model/game';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  dataSource: any = [];
  game: Game = { id: '', name: '', name_owner: '', release_date: ''};
  isLoadingResults = true;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.getGame(this.route.snapshot.params['id']);
    this.getGames();
  }

  getGame(id) {
    this.api.getGame(id)
      .subscribe(data => {
        this.game = data;
        console.log(this.game);
        this.isLoadingResults = false;
      });
  }

  getGames(){
    return this.api.getGames()
    .subscribe(data => this.dataSource = data);
  }

  deleteGame(id) {
    if (window.confirm('Delete?')){
      this.api.deleteGame(id).subscribe(data => {
        this.getGames()
      })
    }
  }  

}
