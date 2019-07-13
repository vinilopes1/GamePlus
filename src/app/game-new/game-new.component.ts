import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-game-new',
  templateUrl: './game-new.component.html',
  styleUrls: ['./game-new.component.css']
})
export class GameNewComponent implements OnInit {

  gameForm: FormGroup;
  isLoadingResults = false;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.gameForm = this.formBuilder.group({
      'name' : [null, Validators.required]
        });
  }

  addGame(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addGame(form)
      .subscribe(res => {
          const id = res['_id'];
          this.isLoadingResults = false;
          this.router.navigate(['/game-detail', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
