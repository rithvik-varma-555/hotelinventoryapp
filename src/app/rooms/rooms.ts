import { Component } from '@angular/core';

@Component({
  selector: 'hinv-rooms',
  imports: [],
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss',
})
export class Rooms {
  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  hideRooms = false;

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
