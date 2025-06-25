import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { ProfileComponent } from './profile/profile';
import { Sum } from './sum/sum';
import { ComPractice } from './com-practice/com-practice';

@Component({
  selector: 'app-root',
  imports: [Login, Signup, ProfileComponent, Sum, ComPractice],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-part1';
}
