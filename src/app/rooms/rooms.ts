import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms.interface';
import { CommonModule } from '@angular/common';
import { RoomsList } from './rooms-list/rooms-list';

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [CommonModule, RoomsList],
  templateUrl: './rooms.html',
  styleUrls: ['./rooms.scss'],
})
export class Rooms implements OnInit {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomsList: RoomList[] = [];

  constructor() {}
  ngOnInit(): void {
    this.roomsList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 500,
        photos:
          'https://images.unsplash.com/photo-1560448070-c6d4f5f1c8b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVsdXhlJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        checkinTime: new Date('2021-11-11'),
        checkoutTime: new Date('2021-11-12'),
        rating: 4.5,
      },
      {
        roomNumber: 2,
        roomType: 'Premium Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 1000,
        photos:
          'https://images.unsplash.com/photo-1501117716987-c8e2bfbf0f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJlbWl1bSUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        checkinTime: new Date('2021-11-11'),
        checkoutTime: new Date('2021-11-12'),
        rating: 3.4,
      },
      {
        roomNumber: 3,
        roomType: 'Luxury Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 15000,
        photos:
          'https://images.unsplash.com/photo-1501183638714-8f3c5a7b8f4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHV4dXJ5JTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        checkinTime: new Date('2021-11-11'),
        checkoutTime: new Date('2021-11-12'),
        rating: 2.6,
      },
    ];
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
