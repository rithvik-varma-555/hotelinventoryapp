import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Rooms } from './rooms/rooms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hinv-root',
  imports: [RouterOutlet, Rooms, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('hotelinventoryapp');

  // role = 'admin';
}
