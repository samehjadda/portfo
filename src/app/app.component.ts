import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeInAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('1s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
  
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  isLoading: boolean = true;

  ngOnInit(): void {
    this.createStars();

    setTimeout(() => {
      this.isLoading = false;
    }, 4000); // Adjust the delay duration (in milliseconds) as needed
  }

  createStars(): void {
    const numberOfStars = 200; // Adjust the number of stars as needed

    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + 'vw';
      star.style.top = Math.random() * 100 + 'vh';
      star.style.animationDuration = 5 + Math.random() * 10 + 's';
      star.style.animationDelay = Math.random() * 10 + 's';
      document.body.appendChild(star);
    }
  }
}
