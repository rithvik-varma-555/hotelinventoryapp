import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { Employee } from '../employee/employee';  

@Component({
  selector: 'hinv-container',
  imports: [],
  templateUrl: './container.html',
  styleUrl: './container.scss'
})
export class Container implements OnInit, AfterContentInit {

  @ContentChild(Employee) employee!: Employee;

  constructor() { }

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    console.log(this.employee); 
    this.employee.empName = 'Rick';
  }
}
