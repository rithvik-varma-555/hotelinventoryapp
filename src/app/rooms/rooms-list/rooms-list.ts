import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomList } from '../rooms.interface';

@Component({
  selector: 'hinv-rooms-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms-list.html',
  styleUrls: ['./rooms-list.scss'],
})
export class RoomsList implements OnInit {
  @Input() rooms: RoomList[] = [];

  constructor() {}
  ngOnInit(): void {
    // Initialization logic here
  }
}
