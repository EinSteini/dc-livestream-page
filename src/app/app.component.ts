import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LivestreamComponent } from './livestream/livestream.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LivestreamComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'discord-livestream-clone';
}
