// https://www.codewars.com/kata/51fda2d95d6efda45e00004e/train/javascript

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
