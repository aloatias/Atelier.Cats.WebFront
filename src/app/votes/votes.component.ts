import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';
import { IWinner } from '../Models/IWinner';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {
  public cats: IWinner[] = new Array<IWinner>();
  public showSpinner: boolean = true;
  public showNoDataMessage: boolean = false;

  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.catService.getVotes()
      .subscribe(votes => {
        this.cats = votes
        this.showNoDataMessage = this.cats.length === 0;

        this.showSpinner = false;
      });
  }
}
