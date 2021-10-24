import { IChallengeResult } from "./IChallengeResult";

export class ChallengeResult implements IChallengeResult {
    challengerOneId: string = "";
    challengerTwoId: string = "";
    winnerId: string = "";
}