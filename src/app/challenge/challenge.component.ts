import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';
import { ChallengeResult } from '../Models/ChallengeResult';
import { Cat } from '../Models/Cat';
import { ICat } from '../Models/ICat';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})

export class ChallengeComponent implements OnInit {
  public leftContender: ICat = new Cat();
  public rightContender: ICat = new Cat();
  public showSpinner: boolean = true;
  public showNoDataMessage: boolean = false;
  public totalVotes: number = 0;

  constructor(
    private catService: CatService) { }

  ngOnInit(): void {
    this.getContenders();
    this.getVotes();
  }

  getContenders(): void {
    this.showSpinner = true;
    this.catService.getContenders()
      .subscribe(
        contenders => {
          console.log(contenders);
          if (contenders != null) {
            this.leftContender = contenders.contenderOne;
            this.rightContender = contenders.contenderTwo;
            this.showNoDataMessage = false;
          } else {
            this.showNoDataMessage = true;
          }

          this.showSpinner = false;
        });
  }

  getVotes() {
    this.catService.getVotesCount()
    .subscribe(votesCount => {
      this.totalVotes = votesCount;
    });
  }

  vote(winnderId: string): void {
    this.showSpinner = true;

    let result = new ChallengeResult();
    result.challengerOneId = this.leftContender.id;
    result.challengerTwoId = this.rightContender.id;
    result.winnerId = winnderId;

    this.catService.setChallengeResult(result)
      .subscribe(() => {
        this.showSpinner = false;
        this.getContenders();
        this.getVotes();
      });
  }
}
