import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Game } from 'src/model/game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'name_owner', 'release_date', 'acao'];
  dataSource: Game[];
  isLoadingResults = true;
  Games: Game[];
  error: any;

  constructor(public api: ApiService) {
   }

  ngOnInit() {

    this.getGames();


    // this._api.getGames()
    // .subscribe(res => {
    //   this.dataSource = res;
    //   console.log(this.dataSource);
    //   this.isLoadingResults = false;
    // }, err => {
    //   console.log(err);
    //   this.isLoadingResults = false;
    // });
  }

  getGames(){
    return this.api.getGames()
    .subscribe(data => this.dataSource = data);
  }
}
