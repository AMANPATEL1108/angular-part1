import { Component } from '@angular/core';

@Component({
  selector: 'app-com-practice',
  imports: [],
  templateUrl: './com-practice.html',
  styleUrl: './com-practice.css',
})
export class ComPractice {
  // abc() {
  //   console.log('Function Called');
  //   this.otherFun() ;
  // }

  // otherFun() {
  //   console.log('Other Function Called');
  // }

  name: string | number = 'Aman ';

  updateName() {
    this.name = 'ap is Here';
    this.name = 123;
  }

  sum(a: number, b: number): number {
    console.log('Sum Function Called');
    console.log(a + b) ;
    return a + b;
  }
}
