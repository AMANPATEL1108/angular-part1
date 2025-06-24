import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-part1';
  name = 'amanpatel';
  pd= this.hrllo1();

  hrllo1() {
    const a = 10;
    console.log('hello1');
  }
}
