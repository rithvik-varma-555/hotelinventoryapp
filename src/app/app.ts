import { AfterViewInit, Component, ElementRef, signal, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Rooms } from './rooms/rooms';
import { CommonModule } from '@angular/common';
import { Container } from "./container/container";
import { Employee } from "./employee/employee";

@Component({
  selector: 'hinv-root',
  imports: [RouterOutlet, CommonModule, Rooms, Container, Employee],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('hotelinventoryapp');

  @ViewChild('name', { static: true }) name!: ElementRef;

  ngOnInit(): void {
    console.log(this.name.nativeElement.innerText = "Hilton Hotel");
  }

  // @ViewChild('user', { read: ViewContainerRef } ) vcr!: ViewContainerRef;

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(Rooms);
  //   componentRef.instance.numberOfRooms = 50;
  // }

  // role = 'admin';
}
