import { Component } from '@angular/core';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.html',
  styleUrls: ['./sum.css'],
})
export class Sum {
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    if (this.count != 0) {
      this.count--;
    }
  }

  reset() {
    this.count = 0;
  }

  handleCounter(val: string) {
    if (val == 'plus') {
      this.count++;
    } else if (val == 'minus') {
      if (this.count != 0) {
        this.count--;
      }
    } else {
      this.count = 0;
    }
  }
}
