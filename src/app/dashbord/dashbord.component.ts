import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss'],
})
export class DashbordComponent implements OnInit {
  numbers: number[] = [];
  @ViewChild('scrollContainer') scrollContainer: ElementRef | undefined;

  private scrollStep = 100;

  scrollLeft() {
    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollLeft -= this.scrollStep;
    }
  }

  scrollRight() {
    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollLeft += this.scrollStep;
    }
  }

  constructor() {
    for (let i = 1; i <= 35; i++) {
      this.numbers.push(i);
    }
  }

  ngOnInit(): void {}
}
