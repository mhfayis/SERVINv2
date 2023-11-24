import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss'],
})
export class DashbordComponent implements OnInit {
  numbers: number[] = [];

  constructor() {
    for (let i = 1; i <= 35; i++) {
      this.numbers.push(i);
    }
  }

  ngOnInit(): void {}
}
