import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hinv-employee',
  imports: [],
  templateUrl: './employee.html',
  styleUrl: './employee.scss'
})
export class Employee implements OnInit {

  empName: string = "John";

  constructor() { }

  ngOnInit(): void {
  }
}
