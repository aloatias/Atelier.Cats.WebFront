import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';
import { ChallengeService } from '../challenge.service';
import { ChallengeResult } from '../Models/ChallengeResult';
import { Contender } from '../Models/Contender';
import { IContender } from '../Models/IContender';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})

export class ChallengeComponent implements OnInit {
  public leftContender: IContender = new Contender();
  public rightContender: IContender = new Contender();
  public showSpinner: boolean = true;
  public totalVotes: number = 0;

  constructor(
    private catService: CatService,
    private challengeService: ChallengeService) { }

  ngOnInit(): void {
    this.getContenders();
    this.getVotes();
  }

  getContenders(): void {
    this.showSpinner = true;
    this.catService.getContenders()
      .subscribe(
        contenders => {
          this.leftContender = contenders.contenderOne;
          this.rightContender = contenders.contenderTwo;

          this.showSpinner = false;
        });
  }

  getVotes() {
    this.challengeService.getVotes()
    .subscribe(votes => {
      this.totalVotes = votes;
    });
  }

  vote(winnderId: string): void {
    this.showSpinner = true;

    let result = new ChallengeResult();
    result.challengerOneId = this.leftContender.id;
    result.challengerTwoId = this.rightContender.id;
    result.winnerId = winnderId;

    this.challengeService.setChallengeResult(result)
      .subscribe(() => {
        this.showSpinner = false;
        this.getContenders();
        this.getVotes();
      });
  }
}
