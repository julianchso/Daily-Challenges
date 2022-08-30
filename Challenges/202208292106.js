/*
https://www.codewars.com/kata/51fda2d95d6efda45e00004e/train/javascript

Write a class called User that is used to calculate the amount that a user will progress through a ranking system similar to the one Codewars uses.

Business Rules:
• A user starts at rank -8 and can progress all the way to 8.
• There is no 0 (zero) rank. The next rank after -1 is 1.
• Users will complete activities. These activities also have ranks.
• Each time the user completes a ranked activity the users rank progress is updated based off of the activity's rank
• The progress earned from the completed activity is relative to what the user's current rank is compared to the rank of the activity
• A user's rank progress starts off at zero, each time the progress reaches 100 the user's rank is upgraded to the next level
• Any remaining progress earned while in the previous rank will be applied towards the next rank's progress (we don't throw any progress away). The exception is if there is no other rank left to progress towards (Once you reach rank 8 there is no more progression).
• A user cannot progress beyond rank 8.
• The only acceptable range of rank values is -8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8. Any other value should raise an error.

The progress is scored like so:
• Completing an activity that is ranked the same as that of the user's will be worth 3 points
• Completing an activity that is ranked one ranking lower than the user's will be worth 1 point
• Any activities completed that are ranking 2 levels or more lower than the user's ranking will be ignored
• Completing an activity ranked higher than the current user's rank will accelerate the rank progression. The greater the difference between rankings the more the progression will be increased. The formula is 10 * d * d where d equals the difference in ranking between the activity and the user.

Logic Examples:
• If a user ranked -8 completes an activity ranked -7 they will receive 10 progress
• If a user ranked -8 completes an activity ranked -6 they will receive 40 progress
• If a user ranked -8 completes an activity ranked -5 they will receive 90 progress
• If a user ranked -8 completes an activity ranked -4 they will receive 160 progress, resulting in the user being upgraded to rank -7 and having earned 60 progress towards their next rank
• If a user ranked -1 completes an activity ranked 1 they will receive 10 progress (remember, zero rank is ignored)
*/

class User {
  constructor(rank, progress) {
    this.rank = -8;
    this.progress = 0;
  }

  incProgress(activityLevel) {
    if (activityLevel == this.rank) {
      this.progress += 3;
    }

    if (activityLevel >= 9 || activityLevel <= -9 || activityLevel == 0) {
      throw "Invalid paramaters!";
    }

    if (activityLevel > 0 && this.rank < 0) {
      if (activityLevel - this.rank - 1 == -1) {
        this.progress += 1;
      }
      if (activityLevel - this.rank - 1 <= -2) {
        this.progress += 0;
      } else {
        let d = activityLevel - this.rank - 1;
        this.progress += 10 * d * d;
      }
    } else {
      if (activityLevel - this.rank + 1 == -1) {
        this.progress += 1;
      }
      if (activityLevel - this.rank <= -2) {
        this.progress += 0;
      } else {
        let d = activityLevel - this.rank;
        this.progress += 10 * d * d;
      }
    }

    while (this.progress >= 100) {
      this.progress = this.progress - 100;
      if (this.rank == -1) {
        this.rank += 2;
      } else {
        this.rank++;
      }
    }
    
    if (this.rank == 8) {
      return [(this.rank = 8), (this.progress = 0)];
    }
  }

  printRank() {
    console.log(this.rank);
  }
}

const newUser = new User();
