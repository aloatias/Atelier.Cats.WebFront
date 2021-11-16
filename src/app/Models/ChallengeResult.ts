import { IChallengeResult } from "./IChallengeResult";

export class ChallengeResult implements IChallengeResult {
    winnerId: string;
    loserId: string;

    constructor(winnerId: string, loserId: string)
    {
        this.winnerId = winnerId;
        this.loserId = loserId;
    }
}