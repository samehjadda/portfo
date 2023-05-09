import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
})
export class LoadingComponent implements OnInit {
  isLoading: boolean = true;
  fadeOut: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.fadeOut = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    }, 3000); // Adjust the delay duration (in milliseconds) as needed
  }
}
